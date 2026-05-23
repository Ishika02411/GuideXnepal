import Navbar from "../components/Navbar";

function LandingPage() {

  return (

    <div>

      <Navbar />

      {/* Hero Section */}

      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1470&auto=format&fit=crop')",
        }}
      >

        {/* Dark Overlay */}

        <div className="bg-black/50 w-full h-full flex items-center justify-center">

          {/* Content */}

          <div className="text-center text-white px-4">

            <h1 className="text-6xl md:text-7xl font-bold">

              Explore Beautiful Nepal

            </h1>

            <p className="mt-6 text-xl md:text-2xl">

              Discover amazing tourist destinations and local guides.

            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition">

              Explore Locations

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LandingPage;