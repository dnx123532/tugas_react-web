import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="brand">Data Mahasiswa</h1>
      </div>
      <div className="navbar-right">
        <Link to="/">Input</Link>
        <Link to="/list">Daftar</Link>
      </div>
    </nav>
  );
}