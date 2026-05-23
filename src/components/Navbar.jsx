import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

      {/* Logo */}

      <h1 className="text-3xl font-bold text-blue-900">

        GuideXNepal

      </h1>

      {/* Navigation Links */}

      <div className="flex gap-8 text-lg font-medium">

        <Link
          to="/"
          className="hover:text-blue-600 transition"
        >
          Home
        </Link>

        <Link
          to="/locations"
          className="hover:text-blue-600 transition"
        >
          Locations
        </Link>

        <Link
          to="/login"
          className="hover:text-blue-600 transition"
        >
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;