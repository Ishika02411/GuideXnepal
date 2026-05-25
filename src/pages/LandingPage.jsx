import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {

  return (

    <div >

      <Navbar />

      {/* Hero Section */}

      <section
  style={{
    paddingTop: "80px",
    height: "90vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1575819719798-83d97dd6949c')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    padding: "20px",
  }}
>
  <h1
    style={{
      fontSize: "5rem",
      fontWeight: "bold",
      marginBottom: "20px",
    }}
  >
    Explore Beautiful Nepal
  </h1>

  <p
    style={{
      fontSize: "1.5rem",
      maxWidth: "800px",
      marginBottom: "30px",
      lineHeight: "1.6",
    }}
  >
    Discover breathtaking mountains, peaceful lakes, local culture,
    and unforgettable adventures across Nepal.
  </p>

  <button
    style={{
      background: "#2563eb",
      color: "white",
      border: "none",
      padding: "16px 40px",
      borderRadius: "10px",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "0.3s",
      fontWeight: "bold",
    }}
  >
    Explore Locations
  </button>

  <div
    style={{
      display: "flex",
      gap: "40px",
      marginTop: "60px",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    <div>
      <h2>50+</h2>
      <p>Tourist Destinations</p>
    </div>

    <div>
      <h2>1000+</h2>
      <p>Happy Travelers</p>
    </div>

    <div>
      <h2>4.9★</h2>
      <p>User Rating</p>
    </div>
  </div>
</section>

{/* FEATURED DESTINATIONS */}

<div
  style={{
    padding: "80px 50px",
    background: "#f8fafc",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "3rem",
      marginBottom: "50px",
      color: "#1e3a8a",
    }}
  >
    Featured Destinations
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(320px,1fr))",
      gap: "30px",
    }}
  >

    {/* CARD 1 */}

    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "white",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.1)",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >

      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Everest"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "25px" }}>

        <h3
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
          }}
        >
          Mount Everest
        </h3>

        <p
          style={{
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          Experience the breathtaking beauty
          of the world’s highest mountain.
        </p>

      </div>
    </div>

    {/* CARD 2 */}

    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "white",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >

      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Pokhara"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "25px" }}>

        <h3
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
          }}
        >
          Pokhara
        </h3>

        <p
          style={{
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          Discover peaceful lakes and
          adventure sports in Pokhara.
        </p>

      </div>
    </div>

    {/* CARD 3 */}

    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "white",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >

      <img
        src="https://images.unsplash.com/photo-1494526585095-c41746248156"
        alt="Lumbini"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "25px" }}>

        <h3
          style={{
            fontSize: "1.8rem",
            marginBottom: "10px",
          }}
        >
          Lumbini
        </h3>

        <p
          style={{
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          Visit the sacred birthplace
          of Lord Buddha.
        </p>

      </div>
    </div>

  </div>
</div>

<section
  style={{
    padding: "80px 40px",
    background: "#f8fafc",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "3rem",
      color: "#1e3a8a",
      marginBottom: "15px",
    }}
  >
    Popular Destinations
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "#555",
      marginBottom: "50px",
      fontSize: "1.1rem",
    }}
  >
    Explore Nepal’s most loved tourist attractions.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "30px",
    }}
  >
    {/* CARD 1 */}
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Everest"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Mount Everest</h3>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          Experience the world's highest mountain and breathtaking Himalayan views.
        </p>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Explore
        </button>
      </div>
    </div>

    {/* CARD 2 */}
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Pokhara"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Pokhara</h3>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          Enjoy peaceful lakes, adventure sports, and mountain scenery.
        </p>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Explore
        </button>
      </div>
    </div>

    {/* CARD 3 */}
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1494526585095-c41746248156"
        alt="Lumbini"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Lumbini</h3>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          Visit the birthplace of Lord Buddha and explore spiritual peace.
        </p>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Explore
        </button>
      </div>
    </div>
  </div>
</section>

<section
  style={{
    padding: "80px 40px",
    background: "white",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "3rem",
      color: "#1e3a8a",
      marginBottom: "20px",
    }}
  >
    Why Choose GuideXNepal?
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "#555",
      marginBottom: "60px",
      fontSize: "1.1rem",
    }}
  >
    We provide unforgettable travel experiences across Nepal.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
    }}
  >
    {/* BOX 1 */}
    <div
      style={{
        background: "#f8fafc",
        padding: "40px 30px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#2563eb" }}>
        🏔️ Best Destinations
      </h3>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        Explore Nepal’s most beautiful mountains, lakes, and cultural sites.
      </p>
    </div>

    {/* BOX 2 */}
    <div
      style={{
        background: "#f8fafc",
        padding: "40px 30px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#2563eb" }}>
        🧭 Local Guides
      </h3>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        Connect with experienced local guides for safe and authentic journeys.
      </p>
    </div>

    {/* BOX 3 */}
    <div
      style={{
        background: "#f8fafc",
        padding: "40px 30px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#2563eb" }}>
        ⭐ Trusted Experience
      </h3>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        Thousands of travelers trust GuideXNepal for memorable adventures.
      </p>
    </div>

    {/* BOX 4 */}
    <div
      style={{
        background: "#f8fafc",
        padding: "40px 30px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#2563eb" }}>
        💰 Affordable Tours
      </h3>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        Discover budget-friendly travel packages without compromising quality.
      </p>
    </div>
  </div>
</section>

<section
  style={{
    padding: "80px 40px",
    background: "#f1f5f9",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "3rem",
      color: "#1e3a8a",
      marginBottom: "20px",
    }}
  >
    What Travelers Say
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "#555",
      marginBottom: "60px",
      fontSize: "1.1rem",
    }}
  >
    Hear from travelers who explored Nepal with GuideXNepal.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
    }}
  >
    {/* REVIEW 1 */}
    <div
      style={{
        background: "white",
        padding: "35px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      <p
        style={{
          color: "#555",
          lineHeight: "1.8",
          marginBottom: "25px",
        }}
      >
        “An unforgettable journey! The destinations and guides were amazing.”
      </p>

      <h4 style={{ color: "#2563eb" }}>— Sarah Johnson</h4>
      <span style={{ color: "#777" }}>Traveler from USA</span>
    </div>

    {/* REVIEW 2 */}
    <div
      style={{
        background: "white",
        padding: "35px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      <p
        style={{
          color: "#555",
          lineHeight: "1.8",
          marginBottom: "25px",
        }}
      >
        “Pokhara was breathtaking. GuideXNepal made our trip smooth and safe.”
      </p>

      <h4 style={{ color: "#2563eb" }}>— David Miller</h4>
      <span style={{ color: "#777" }}>Adventure Traveler</span>
    </div>

    {/* REVIEW 3 */}
    <div
      style={{
        background: "white",
        padding: "35px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      <p
        style={{
          color: "#555",
          lineHeight: "1.8",
          marginBottom: "25px",
        }}
      >
        “Beautiful design, excellent destinations, and truly memorable experiences.”
      </p>

      <h4 style={{ color: "#2563eb" }}>— Emma Wilson</h4>
      <span style={{ color: "#777" }}>Travel Blogger</span>
    </div>
  </div>
</section>

<section
  style={{
    padding: "80px 40px",
    background:
      "linear-gradient(to right, #1e3a8a, #2563eb)",
    color: "white",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "40px",
      textAlign: "center",
    }}
  >
    {/* STAT 1 */}
    <div>
      <h2
        style={{
          fontSize: "4rem",
          marginBottom: "10px",
        }}
      >
        50+
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
        }}
      >
        Tourist Destinations
      </p>
    </div>

    {/* STAT 2 */}
    <div>
      <h2
        style={{
          fontSize: "4rem",
          marginBottom: "10px",
        }}
      >
        1000+
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
        }}
      >
        Happy Travelers
      </p>
    </div>

    {/* STAT 3 */}
    <div>
      <h2
        style={{
          fontSize: "4rem",
          marginBottom: "10px",
        }}
      >
        200+
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
        }}
      >
        Local Guides
      </p>
    </div>

    {/* STAT 4 */}
    <div>
      <h2
        style={{
          fontSize: "4rem",
          marginBottom: "10px",
        }}
      >
        4.9★
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
        }}
      >
        User Rating
      </p>
    </div>
  </div>
</section>
<Footer />
    </div>
  );
}

export default LandingPage;