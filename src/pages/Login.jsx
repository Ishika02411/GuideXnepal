import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {

  const navigate = useNavigate();

  // State

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  // Login Function


  const handleLogin = () => {

  if (!email || !password) {

    toast.error("Please fill all fields");

    return;
  }

  // Start Loading

  setLoading(true);

  // Fake API Delay

  setTimeout(() => {

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    toast.success("Login Successful");

    navigate("/dashboard");

    // Stop Loading

    setLoading(false);

  }, 2000);
};

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      {/* Login Box */}

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-900">

          GuideXNepal

        </h1>

        <p className="text-center text-gray-500 mt-2">

          Login to continue

        </p>

        {/* Email */}

        <div className="mt-8">

          <label className="font-semibold">

            Email

          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        {/* Password */}

        <div className="mt-5">

          <label className="font-semibold">

            Password

          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        {/* Show Password */}

        <div className="mt-3 flex items-center gap-2">

          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />

          <p className="text-gray-600">

            Show Password

          </p>

        </div>

        {/* Login Button */}

        <button
  onClick={handleLogin}
  disabled={loading}
  className={`w-full mt-6 py-3 rounded-xl text-lg font-semibold transition text-white ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>

  {
    loading
      ? "Loading..."
      : "Login"
  }

</button>

      </div>

    </div>
  );
}

export default Login;