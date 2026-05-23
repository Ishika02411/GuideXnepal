import { Link, useNavigate } from "react-router-dom";

function Sidebar({

  sidebarOpen,

  isMobile,

  setSidebarOpen

}) {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (

  <>

    {

      isMobile && sidebarOpen && (

        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="fixed inset-0 bg-black/50 z-40"
        ></div>

      )

    }

    <div
  className={`fixed left-0 top-0 z-50 h-screen overflow-y-auto bg-blue-900 text-white transition-transform duration-300  ${
        isMobile
  ? (
      sidebarOpen
        ? "translate-x-0 w-[85%] max-w-[320px] p-6"
        : "-translate-x-full w-[85%] max-w-[320px] p-6"
    )
  : "translate-x-0 w-72 p-6"
      }`}
    >

      {/* Logo */}

      <h1 className="text-2xl md:text-3xl font-bold ml-14">
        GuideXNepal

      </h1>

      {/* Menu */}

      <div className="mt-10 flex flex-col gap-6 text-lg">

        <Link
          to="/dashboard"
          className="hover:text-yellow-300 transition"
        >

          Dashboard

        </Link>

        <Link
          to="/locations"
          className="hover:text-yellow-300 transition"
        >

          Locations

        </Link>

        <Link
          to="/admin"
          className="hover:text-yellow-300 transition"
        >

          Admin Panel

        </Link>

        <Link
          to="/"
          className="hover:text-yellow-300 transition"
        >

          Home

        </Link>

        {/* Logout Button */}

        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl"
        >

          Logout

        </button>

      </div>

    </div>

  </>

);
}

export default Sidebar;