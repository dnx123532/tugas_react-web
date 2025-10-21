import React from "react";
import StudentForm from "../components/StudentForm";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

/**
 * Home hanya menampilkan form.
 * addStudent dikirim via props lewat route parent (App) jadi kita gunakan navigation state:
 * di App.jsx addStudent adalah prop ke route lewat element; cara termudah: memanggil addStudent
 * dari App lewat context lebih rumit — kita sudah mengirim addStudent via prop pada Route element.
 *
 * Untuk implementasi saat ini, Home akan menerima addStudent via props through Router/
 */

export default function Home({ addStudent }) {
  return (
    <div className="home-page">
      <StudentForm onSubmit={addStudent} />
    </div>
  );
}
