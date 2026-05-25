import { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "../components/LocationCard";
import locations from "../data/locations";

function Locations() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/locations")
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">

        Tourist Locations

      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {

          locations.map((location) => (

            <LocationCard
              key={location._id}
              location={location}
            />

          ))

        }

      </div>

    </div>

  );
}

export default Locations;