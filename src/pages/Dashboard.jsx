import Sidebar from "../components/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import {

  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,

} from "recharts";



function Dashboard() {

  const [activeTab, setActiveTab] = useState("overview");

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [isMobile, setIsMobile] = useState(

  window.innerWidth < 768

);

useEffect(() => {

  const handleResize = () => {

    setIsMobile(
      window.innerWidth < 768
    );

  };

  window.addEventListener(
    "resize",
    handleResize
  );

  return () => {

    window.removeEventListener(
      "resize",
      handleResize
    );

  };

}, []);

  // Analytics Data

  const data = [

    {
      month: "Jan",
      queries: 40,
    },

    {
      month: "Feb",
      queries: 65,
    },

    {
      month: "Mar",
      queries: 90,
    },

    {
      month: "Apr",
      queries: 75,
    },

    {
      month: "May",
      queries: 120,
    },

  ];

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}

      <Sidebar
  sidebarOpen={sidebarOpen}
  isMobile={isMobile}
  setSidebarOpen={setSidebarOpen}
/>

      {/* Main Content */}

<div className="flex-1 p-6 pt-24 md:pt-6">

  {/* Toggle Button */}

  <button
  onClick={() =>
    setSidebarOpen(!sidebarOpen)
  }
  className="fixed top-4 left-4 z-[100] bg-blue-600 text-white w-14 h-14 rounded-xl hover:bg-blue-700 transition text-3xl flex items-center justify-center md:hidden"
>

  {
    sidebarOpen
      ? "✕"
      : "☰"
  }

</button>





        <h1 className="text-5xl font-bold text-blue-900">

          Dashboard

        </h1>

        <p className="mt-3 text-gray-600 text-xl">

  Tourism analytics overview 📊

</p>

{/* Tabs */}

<div className="flex gap-5 mt-10 items-center">

  <button
    onClick={() =>
      setActiveTab("overview")
    }
    className={`px-6 py-3 h-fit rounded-xl font-semibold transition ${
      activeTab === "overview"
        ? "bg-blue-600 text-white"
        : "bg-white"
    }`}
  >

    Overview

  </button>

  

  <button
    onClick={() =>
      setActiveTab("analytics")
    }
    className={`px-6 py-3 h-fit rounded-xl font-semibold transition ${
      activeTab === "analytics"
        ? "bg-blue-600 text-white"
        : "bg-white"
    }`}
  >

    Analytics

  </button>

  

  <button
    onClick={() =>
      setActiveTab("settings")
    }
    className={`px-6 py-3 h-fit rounded-xl font-semibold transition ${
      activeTab === "settings"
        ? "bg-blue-600 text-white"
        : "bg-white"
    }`}
  >

    Settings

  </button>

</div>

<div className="mt-10"></div>
{

  activeTab === "analytics" && (

    <div className="bg-white p-10 rounded-2xl shadow-lg mt-10">

      <h2 className="text-4xl font-bold text-blue-900">

        Analytics Report

      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        <div className="bg-blue-100 p-8 rounded-2xl">

          <h3 className="text-2xl font-bold">

            Monthly Visitors

          </h3>

          <p className="text-5xl font-bold mt-4">

            15K

          </p>

        </div>

        <div className="bg-green-100 p-8 rounded-2xl">

          <h3 className="text-2xl font-bold">

            Bookings

          </h3>

          <p className="text-5xl font-bold mt-4">

            1.2K

          </p>

        </div>

        <div className="bg-yellow-100 p-8 rounded-2xl">

          <h3 className="text-2xl font-bold">

            Revenue

          </h3>

          <p className="text-5xl font-bold mt-4">

            $25K

          </p>

        </div>

      </div>

    </div>

  )

}

{

  activeTab === "settings" && (

    <div className="bg-white p-10 rounded-2xl shadow-lg mt-10 max-w-4xl">

      <h2 className="text-4xl font-bold text-blue-900">

        Settings

      </h2>

      <div className="mt-8 space-y-6">

        <div>

          <label className="font-semibold">

            Admin Email

          </label>

          <input
            type="email"
            className="w-full border border-gray-300 rounded-xl px-5 py-4 mt-2"
            placeholder="admin@guidexnepal.com"
          />

        </div>

        <div>

          <label className="font-semibold">

            Website Name

          </label>

          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl px-5 py-4 mt-2"
            placeholder="GuideXNepal"
          />

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">

          Save Settings

        </button>

      </div>

    </div>

  )

}

{

  activeTab === "overview" && (

    <>



        {/* Statistics Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {/* Card 1 */}

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-gray-700">

              Total Locations

            </h2>

            <p className="text-5xl font-bold text-blue-600 mt-4">

              25

            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-gray-700">

              Total Guides

            </h2>

            <p className="text-5xl font-bold text-green-600 mt-4">

              12

            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-gray-700">

              Total Queries

            </h2>

            <p className="text-5xl font-bold text-red-500 mt-4">

              140

            </p>

          </div>

        </div>

        {/* Chart Section */}

        <div className="bg-white p-8 rounded-2xl shadow-lg mt-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-8">

            Monthly Queries Analytics

          </h2>

          <ResponsiveContainer
            width="100%"
            height={400}
          >

            <BarChart data={data}>

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="queries"
                fill="#2563eb"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

    </>

  )

}
      </div>

    </div>
  );
}

export default Dashboard;