import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";

function AdminPanel() {

  // State for form inputs

  const [name, setName] = useState("");

  const [image, setImage] = useState("");

  const [description, setDescription] = useState("");

  const [whatsapp, setWhatsapp] = useState("");

  // State for locations list

  const [locations, setLocations] = useState([]);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [darkMode, setDarkMode] = useState(() => {

  return localStorage.getItem("darkMode") === "true";

});

const [loading, setLoading] = useState(false);
const [showModal, setShowModal] = useState(false);

const [showDeleteModal, setShowDeleteModal] = useState(false);

const [deleteId, setDeleteId] = useState(null);

useEffect(() => {

  const savedLocations = localStorage.getItem("locations");

  if (savedLocations) {

    setLocations(JSON.parse(savedLocations));
  }

}, []);

useEffect(() => {

  // Prevent saving empty array initially

  if (locations.length > 0) {

  localStorage.setItem(
    "locations",
    JSON.stringify(locations)
  );
}

}, [locations]);

useEffect(() => {

  localStorage.setItem(
  "darkMode",
  JSON.stringify(darkMode)
);

}, [darkMode]);



  // Add Location Function


    const handleAddLocation = () => {

  if (
    !name ||
    !image ||
    !description ||
    !whatsapp
  ) {

    toast.error("Please fill all fields");

    return;
  }

  setLoading(true);

  setTimeout(() => {

    const newLocation = {

      id: Date.now(),

      name,

      image,

      description,

      whatsapp,
    };

    setLocations([
      ...locations,
      newLocation
    ]);

    setName("");
    setImage("");
    setDescription("");
    setWhatsapp("");

    toast.success(
      "Location Added Successfully"
    );

    setLoading(false);

  }, 1500);

};

const handleDelete = (id) => {

  const updatedLocations = locations.filter(

    (location) => location.id !== id

  );

  setLocations(updatedLocations);
};


const handleEdit = (location) => {

  setShowModal(true);

  setEditId(location.id);

  setName(location.name);

  setImage(location.image);

  setDescription(location.description);

  setWhatsapp(location.whatsapp);
};

const handleUpdate = () => {

  if (
    !name ||
    !image ||
    !description ||
    !whatsapp
  ) {

    toast.error("Please fill all fields");

    return;
  }

  setLoading(true);

  setTimeout(() => {

    const updatedLocations = locations.map(
      (location) => {

        if (location.id === editId) {

          return {

            ...location,

            name,

            image,

            description,

            whatsapp,
          };
        }

        return location;
      }
    );

    setLocations(updatedLocations);

    // Reset form

    setEditId(null);

    setName("");

    setImage("");

    setDescription("");

    setWhatsapp("");

    toast.success(
      "Location Updated Successfully"
    );

    setShowModal(false);
    setLoading(false);

  }, 1500);

};


const confirmDelete = () => {

  const updatedLocations = locations.filter(

    (location) =>
      location.id !== deleteId

  );

  setLocations(updatedLocations);

  toast.success(
    "Location Deleted Successfully"
  );

  setShowDeleteModal(false);

  setDeleteId(null);
};
  return (

    <div
  className={`flex min-h-screen ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-100 text-black"
  }`}
>

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 p-10">

<div className="flex justify-end">

  <button
    onClick={() =>
      setDarkMode(!darkMode)
    }
    className="bg-black text-white px-6 py-3 rounded-xl"
  >

    {
      darkMode
        ? "Light Mode ☀️"
        : "Dark Mode 🌙"
    }

  </button>

</div>
        <h1 className="text-5xl font-bold text-blue-900">

          Admin Panel

        </h1>

        <p className="mt-3 text-gray-600 text-xl">

          Add new tourist destinations.
        </p>


{

  showModal && (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl relative">

        {/* Close Button */}

        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-2xl"
        >

          ✖

        </button>

        <h2 className="text-3xl font-bold text-blue-900">

          Edit Location

        </h2>

{/* Location Name */}

<div className="mt-6">

  <label className="font-semibold">

    Location Name

  </label>

  <input
    type="text"
    placeholder="Enter location name"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2"
    value={name}
    onChange={(e) =>
      setName(e.target.value)
    }
  />

</div>

{/* Image URL */}

<div className="mt-5">

  <label className="font-semibold">

    Image URL

  </label>

  <input
    type="text"
    placeholder="Enter image URL"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2"
    value={image}
    onChange={(e) =>
      setImage(e.target.value)
    }
  />

</div>

{/* Description */}

<div className="mt-5">

  <label className="font-semibold">

    Description

  </label>

  <textarea
    rows="4"
    placeholder="Enter description"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2"
    value={description}
    onChange={(e) =>
      setDescription(e.target.value)
    }
  />

</div>

{/* WhatsApp */}

<div className="mt-5">

  <label className="font-semibold">

    WhatsApp Number

  </label>

  <input
    type="text"
    placeholder="97798XXXXXXXX"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2"
    value={whatsapp}
    onChange={(e) =>
      setWhatsapp(e.target.value)
    }
  />

</div>

        {/* Update Button */}

        <button
          onClick={handleUpdate}
          disabled={loading}
          className={`mt-8 text-white px-8 py-3 rounded-xl font-semibold transition w-full ${
            loading
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >

          {
            loading
              ? "Updating..."
              : "Update Location"
          }

        </button>

      </div>

    </div>

  )

}
        
        {

  showDeleteModal && (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      {/* Modal */}

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">

        <h2 className="text-3xl font-bold text-red-600">

          Delete Location?

        </h2>

        <p className="mt-5 text-gray-600">

          This action cannot be undone.

        </p>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          {/* Cancel */}

          <button
            onClick={() =>
              setShowDeleteModal(false)
            }
            className="w-full bg-gray-300 hover:bg-gray-400 py-3 rounded-xl font-semibold"
          >

            Cancel

          </button>

          {/* Confirm */}

          <button
            onClick={confirmDelete}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
          >

            Delete

          </button>

        </div>

      </div>

    </div>

  )

}
        
        {/* Form */}

        <div className={`p-8 rounded-2xl shadow-lg ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-black"
}`}>

          {/* Location Name */}

          <div>

            <label className="font-semibold">

              Location Name

            </label>

            <input
              type="text"
              placeholder="Enter location name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>

          {/* Image URL */}

          <div className="mt-5">

            <label className="font-semibold">

              Image URL

            </label>

            <input
              type="text"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

          </div>

          {/* Description */}

          <div className="mt-5">

            <label className="font-semibold">

              Description

            </label>

            <textarea
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2"
              rows="4"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

          </div>

          {/* WhatsApp */}

          <div className="mt-5">

            <label className="font-semibold">

              WhatsApp Number

            </label>

            <input
              type="text"
              placeholder="97798XXXXXXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2"
              value={whatsapp}
              onChange={(e) =>
                setWhatsapp(e.target.value)
              }
            />

          </div>

          {/* Button */}

          <button
  onClick={
    editId
      ? handleUpdate
      : handleAddLocation
  }
  disabled={loading}
  className={`mt-8 text-white px-8 py-3 rounded-xl font-semibold transition ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>

  {
    loading
      ? "Processing..."
      : editId
      ? "Update Location"
      : "Add Location"
  }

</button>

        </div>

{/* Search Box */}

<div className="mt-12 max-w-xl">

  <input
    type="text"
    placeholder="Search locations..."
    className="w-full border border-gray-300 rounded-xl px-5 py-4 shadow-sm"
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
  />

</div>


        {/* Added Locations */}

        <div className="mt-14">

          <h2 className="text-3xl font-bold text-gray-800">

            Added Locations

          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-8">

            {

              locations
  .filter((location) =>

    location.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

  )
  .map((location) => (

                <div
                  key={location.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >

                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-5">

                    <h3 className="text-2xl font-bold">

                      {location.name}

                    </h3>

                    <p className="mt-2 text-gray-600">

                      {location.description}

                    </p>

                    <div className="flex gap-4 mt-5">

  {/* WhatsApp Button */}

  <button
    className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl w-full"
  >

    WhatsApp Query

  </button>

  {/* Delete Button */}

<button
  onClick={() => handleEdit(location)}
  className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl w-full"
>

  Edit

</button>

  <button
    onClick={() => {

  setDeleteId(location.id);

  setShowDeleteModal(true);

}}
    className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl w-full"
  >

    Delete

  </button>

</div>

                  </div>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminPanel;