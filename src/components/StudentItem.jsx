import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StudentItem.css";

export default function StudentItem({ student, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="student-card">
      <div className="student-card-left">
        <img
          src={student.foto || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTUwJyBoZWlnaHQ9JzE1MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZWVmZWYnIHJ4PScyMCc+PC9yZWN0Pjx0ZXh0IHg9JzUwJScgeT0nNTAlJyBmb250LXNpemU9JzE2JyBmaWxsPScjY2NjJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJz5OYS08L3RleHQ+PC9zdmc+"}
          alt={student.nama}
        />
      </div>

      <div className="student-card-right">
        <h3>{student.nama}</h3>
        <p><b>NIM:</b> {student.nim}</p>
        <p><b>Tempat:</b> {student.tempat}</p>
        <p><b>Umur:</b> {student.umur}</p>
        <p><b>Pekerjaan:</b> {student.pekerjaan}</p>

        <div className="card-actions">
          <button onClick={() => navigate(`/edit/${student.id}`)}>Edit</button>
          <button className="delete" onClick={() => onDelete(student.id)}>Hapus</button>
        </div>
      </div>
    </div>
  );
}
