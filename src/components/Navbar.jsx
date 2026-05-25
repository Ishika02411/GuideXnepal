import logo from "../assets/logo.png";

import React, {
  useState,
  useEffect,
} from "react";

import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {

        setScrolled(true);

      } else {

        setScrolled(false);

      }

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled
          ? "rgba(15,23,42,0.95)"
          : "transparent",
        backdropFilter: "blur(10px)",
        transition: "0.3s",
      }}
    >

      {/* LOGO */}

     <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
  }}
>
  <img
    src={logo}
    alt="GuideXNepal Logo"
    style={{
      width: "42px",
      height: "42px",
      objectFit: "contain",
      borderRadius: "12px",
    }}
  />

  <h1
    style={{
      color: "white",
      fontSize: "32px",
      fontWeight: "bold",
      margin: 0,
    }}
  >
    GuideXNepal
  </h1>
</div>

      {/* DESKTOP LINKS */}

      <div
        className="desktop-menu"
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/locations"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Locations
        </Link>

        <Link
          to="/admin"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Admin
        </Link>

      </div>

      {/* HAMBURGER */}

      <div
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        style={{
          color: "white",
          fontSize: "2rem",
          cursor: "pointer",
          display: "none",
        }}
        className="hamburger"
      >
        ☰
      </div>

      {/* MOBILE MENU */}

      {
        menuOpen && (

          <div
            style={{
              position: "absolute",
              top: "80px",
              right: "20px",
              background: "#0f172a",
              padding: "25px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              minWidth: "200px",
            }}
          >

            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </Link>

            <Link
              to="/locations"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Locations
            </Link>

            <Link
              to="/admin"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Admin
            </Link>

          </div>

        )
      }

    </nav>

  );

};

export default Navbar;