import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero-section">
        <img
          src="/mikroskil.jpeg"
          alt="Universitas Mikroskil"
          className="hero-image"
        />

        <h1 className="hero-title">Universitas Mikroskil</h1>
        <p className="hero-desc">
          Selamat datang di sistem manajemen data mahasiswa Universitas Mikroskil.
          Di sini Anda dapat menambah, mengedit, dan melihat daftar mahasiswa secara mudah.
        </p>

        <button className="btn-start" onClick={() => navigate("/list")}>
          Lihat Data Mahasiswa
        </button>

        <button className="btn-add" onClick={() => navigate("/input")}>
          Tambah Mahasiswa Baru
        </button>
      </div>
    </div>
  );
}
