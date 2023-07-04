import React from "react";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <a href="/" style={linkStyle}>
            Home
          </a>
        </li>
        <li style={liStyle}>
          <a href="/about" style={linkStyle}>
            About
          </a>
        </li>
        <li style={liStyle}>
          <a href="/contact" style={linkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: "#333",
  padding: "10px",
  borderRadius: "10px", // Added border radius
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-around",
};

const liStyle = {
  margin: "0 10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Navbar;
