import footerLogo from "../assets/footer-logo.png";

import React from "react";

const Footer = () => {
  const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};
  return (
    <footer
  style={{
    background: "#020c2b",
    color: "white",
    padding: "70px 40px 30px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "50px",
      maxWidth: "1400px",
      margin: "0 auto",
      alignItems: "start",
    }}
  >

    {/* LOGO SECTION */}

    <div>

      <img
        src={footerLogo}
        alt="GuideXNepal"
        style={{
          width: "180px",
          marginBottom: "20px",
        }}
      />

      <h2
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          lineHeight: "1.4",
        }}
      >
        Explore Nepal Like Never Before
      </h2>

      <p
        style={{
          color: "#cbd5e1",
          lineHeight: "2",
          fontSize: "17px",
        }}
      >
        Discover breathtaking mountains,
        peaceful lakes, rich culture,
        and unforgettable travel
        experiences across Nepal.
      </p>

    </div>

    {/* QUICK LINKS */}

    <div>

      <h3
        style={{
          marginBottom: "25px",
          color: "#3b82f6",
        }}
      >
        Quick Links
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >

        <a href="/" style={linkStyle}>
          Home
        </a>

        <a
          href="/locations"
          style={linkStyle}
        >
          Locations
        </a>

        <a href="#" style={linkStyle}>
          About
        </a>

        <a href="#" style={linkStyle}>
          Contact
        </a>

      </div>

    </div>

    {/* CONTACT */}

    <div>

      <h3
        style={{
          marginBottom: "25px",
          color: "#3b82f6",
        }}
      >
        Contact
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          color: "#e2e8f0",
          fontSize: "18px",
        }}
      >
        <p>📍 Kathmandu, Nepal</p>

        <p>📞 +977 9800000000</p>

        <p>✉ support@guidexnepal.com</p>
      </div>

    </div>

    {/* NEWSLETTER */}

    <div>

      <h3
        style={{
          marginBottom: "25px",
          color: "#3b82f6",
        }}
      >
        Newsletter
      </h3>

      <p
        style={{
          color: "#cbd5e1",
          lineHeight: "1.8",
          marginBottom: "20px",
        }}
      >
        Subscribe for travel updates,
        offers, and latest destinations.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          border: "none",
          marginBottom: "15px",
          fontSize: "16px",
        }}
      />

      <button
        style={{
          width: "100%",
          padding: "15px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>

    </div>

  </div>

  {/* BOTTOM */}

  <div
    style={{
      borderTop:
        "1px solid rgba(255,255,255,0.1)",
      marginTop: "60px",
      paddingTop: "25px",
      textAlign: "center",
      color: "#94a3b8",
      fontSize: "15px",
    }}
  >
    © 2026 GuideXNepal. All rights reserved.
  </div>

</footer>
  );
};

export default Footer;