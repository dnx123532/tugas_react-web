import React, { useEffect, useState } from "react";
import StudentItem from "../components/StudentItem";
import "../styles/StudentList.css";

export default function StudentList({ students, onDelete }) {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(students || []);
  }, [students]);

  const filtered = list.filter(
    (s) =>
      s.nama.toLowerCase().includes(query.toLowerCase()) ||
      s.nim.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="list-page">
      <div className="list-header">
        <h2>Daftar Mahasiswa</h2>
        <input
          className="search-input"
          placeholder="Cari berdasarkan NIM atau Nama..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="student-list">
        {filtered.length === 0 ? (
          <p className="no-data">Tidak ada data mahasiswa.</p>
        ) : (
          filtered.map((s) => (
            <StudentItem key={s.id} student={s} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  );
}