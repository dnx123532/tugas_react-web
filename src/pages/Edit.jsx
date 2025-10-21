import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import "../styles/Edit.css";

export default function Edit({ students, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    const found = (students || []).find((s) => String(s.id) === String(id));
    if (found) setInitial(found);
  }, [students, id]);

  const handleUpdate = (form) => {
    onUpdate(form);
    navigate("/list");
  };

  return (
    <div className="edit-page">
      {initial ? (
        <StudentForm onSubmit={handleUpdate} initialData={initial} />
      ) : (
        <p>Memuat data...</p>
      )}
    </div>
  );
}