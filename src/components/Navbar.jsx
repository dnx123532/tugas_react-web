import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Sistem Mahasiswa</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">Daftar mahasiswa</Link></li>
        <li><Link to="/input">Input mahasiswa</Link></li>
      </ul>
    </nav>
  );
}
