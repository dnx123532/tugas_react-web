import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import Edit from "./pages/Edit";
import Input from "./pages/Input"; // 👉 tambahkan ini
import "./App.css";

function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students_v1");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("students_v1", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    const withId = { ...student, id: student.id || Date.now() };
    setStudents((prev) => [...prev, withId]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const updateStudent = (updated) => {
    setStudents((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addStudent={addStudent} />} />
        <Route path="/list" element={<StudentList students={students} onDelete={deleteStudent} />} />
        <Route path="/input" element={<Input addStudent={addStudent} />} /> {/* 👈 route baru */}
        <Route path="/edit/:id" element={<Edit students={students} onUpdate={updateStudent} />} />
      </Routes>
    </>
  );
}

export default App;
