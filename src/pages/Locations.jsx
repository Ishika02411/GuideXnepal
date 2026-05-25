import React from "react";
import { useNavigate } from "react-router-dom";
import locations from "../data/locations";

const Locations = () => {

  const navigate = useNavigate();
  return (
    <div style={{ padding: "40px" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#1e3a8a",
          marginBottom: "40px",
        }}
      >
        Tourist Locations
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {locations.map((location) => (
         <div
  key={location.id}
  style={{
    background: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: "all 0.4s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.querySelector("img").style.transform =
  "scale(1.1)";
    e.currentTarget.style.transform =
      "translateY(-15px) scale(1.03)";
    e.currentTarget.style.boxShadow =
      "0 20px 40px rgba(0,0,0,0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.querySelector("img").style.transform =
  "scale(1)";
    e.currentTarget.style.transform =
      "translateY(0px) scale(1)";
    e.currentTarget.style.boxShadow =
      "0 10px 25px rgba(0,0,0,0.15)";
  }}
>
            <img
  src={location.image}
  alt={location.name}
  style={{
    width: "100%",
    height: "220px",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  }}
/>

            <div style={{ padding: "20px" }}>
              <h2>{location.name}</h2>

              <p>{location.description}</p>

              <button
  onClick={() =>
    window.open(
      "https://wa.me/9779800000000",
      "_blank"
    )
  }
  style={{
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  }}
>
  Query on WhatsApp
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;