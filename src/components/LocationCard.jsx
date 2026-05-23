function LocationCard({ location }) {

  const handleQuery = () => {

    window.open(
      `https://wa.me/${location.whatsapp}`,
      "_blank"
    );
  };

  return (

    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      {/* Image */}

      <img
        src={location.image}
        alt={location.name}
        className="w-full h-60 object-cover"
      />

      {/* Content */}

      <div className="p-5">

        <h2 className="text-3xl font-bold text-gray-800">

          {location.name}

        </h2>

        <p className="mt-3 text-gray-600">

          {location.description}

        </p>

        <button
          onClick={handleQuery}
          className="mt-5 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl w-full font-semibold"
        >

          Query on WhatsApp

        </button>

      </div>

    </div>
  );
}

export default LocationCard;