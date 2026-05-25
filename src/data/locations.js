import React from "react";
import locations from "../data/locations";

const Locations = () => {
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
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={location.image}
              alt={location.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2>{location.name}</h2>

              <p>{location.description}</p>

              <button
                style={{
                  background: "#22c55e",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
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