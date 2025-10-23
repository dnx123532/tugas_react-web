import React from "react";
import StudentForm from "../components/StudentForm";
import "../styles/StudentForm.css";

export default function Input({ addStudent }) {
  return (
    <div className="input-page">
      <h2>Tambah Mahasiswa Baru</h2>
      <StudentForm onSubmit={addStudent} />
    </div>
  );
}
