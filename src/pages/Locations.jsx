import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import LocationCard from "../components/LocationCard";

import Footer from "../components/Footer";

import SkeletonCard from "../components/SkeletonCard";

import axios from "axios";

function Locations() {

  const [loading, setLoading] = useState(true);

  const [locations, setLocations] = useState([]);

  useEffect(() => {

  const fetchLocations = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/locations"
      );

      setLocations(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }

  };

  fetchLocations();

}, []);

  return (

    <div className="bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-center text-blue-900">

          Popular Destinations

        </h1>

        <p className="text-center text-gray-600 mt-4 text-xl">

          Explore the best tourist places in Nepal.

        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-10 mt-10 pb-10">

  {

    loading

      ? (

        <>

          <SkeletonCard />

          <SkeletonCard />

          <SkeletonCard />

        </>

      )

      : (

        locations.map((location) => (

          <LocationCard
            key={location.id}
            location={location}
          />

        ))

      )

  }

</div>

      </div>
<Footer />
    </div>
  );
}

export default Locations;