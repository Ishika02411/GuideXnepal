import { useEffect, useState } from "react";
import axios from "axios";

function AdminPanel() {

  const [locations, setLocations] =
    useState([]);

  const [formData, setFormData] =
    useState({

      name: "",
      description: "",
      image: "",
      whatsapp: "",

    });

  const fetchLocations = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/locations"
      );

      setLocations(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchLocations();

  }, []);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/locations",
        formData
      );

      alert("Location Added");

      fetchLocations();

      setFormData({

        name: "",
        description: "",
        image: "",
        whatsapp: "",

      });

    } catch (error) {

      console.log(error);

    }

  };

 
  const handleEdit = (location) => {

  setEditId(location._id);

  setEditName(location.name);

  setEditDescription(location.description);

};

const handleUpdate = async () => {

  try {

    await axios.put(

      `http://localhost:5000/api/locations/${editId}`,

      {

        name: editName,

        description: editDescription,

      }

    );

    window.location.reload();

  } catch (error) {

    console.log(error);

  }

};

  const handleDelete = async (id) => {

  try {

    await axios.delete(
      `http://localhost:5000/api/locations/${id}`
    );

    setLocations(
      locations.filter(
        (location) => location._id !== id
      )
    );

  } catch (error) {

    console.log(error);

  }

};


const [editId, setEditId] = useState(null);
const [editName, setEditName] = useState("");
const [editDescription, setEditDescription] = useState("");

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-blue-900 mb-8">

          Admin Panel

        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Location Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-4 rounded-xl"
          >

            Add Location

          </button>

        </form>

        {editId && (

  <div className="mt-10 bg-white p-6 rounded-2xl">

    <h2 className="text-2xl font-bold mb-4">

      Edit Location

    </h2>

    <input
      type="text"
      value={editName}
      onChange={(e) =>
        setEditName(e.target.value)
      }
      className="border p-3 w-full mb-4"
    />

    <textarea
      value={editDescription}
      onChange={(e) =>
        setEditDescription(e.target.value)
      }
      className="border p-3 w-full mb-4"
    />

    <button
      onClick={handleUpdate}
      className="bg-green-500 text-white px-5 py-3 rounded-xl"
    >

      Update Location

    </button>

  </div>

)}

      </div>

      {/* Locations List */}

      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-6">

        {

          locations.map((location) => (

            <div
            
              key={location._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <img
                src={location.image}
                alt={location.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">

                  {location.name}

                </h2>

                <p className="mt-2 text-gray-600">

                  {location.description}

                </p>

                <button
  onClick={() => handleDelete(location._id)}
  className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Delete
</button>

<button
  onClick={() => handleEdit(location)}
  className="mt-3 ml-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
>

  Edit

</button>

                

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default AdminPanel;