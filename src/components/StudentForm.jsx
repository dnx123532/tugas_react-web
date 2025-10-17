import React, { useState, useEffect } from "react";
import "../styles/StudentForm.css";

/**
 * props:
 * - onSubmit(studentObject)
 * - initialData (optional) -> for edit
 */
export default function StudentForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    id: null,
    nim: "",
    nama: "",
    tempat: "",
    umur: "",
    pekerjaan: "",
    foto: "", // base64 string
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((f) => ({ ...f, foto: reader.result }));
    };
    reader.readAsDataURL(file); // base64
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validasi sederhana
    if (!form.nim.trim() || !form.nama.trim()) {
      alert("NIM dan Nama wajib diisi.");
      return;
    }

    onSubmit(form);

    // tampilkan alert sukses
    alert(initialData ? "Data mahasiswa berhasil diperbarui!" : "Mahasiswa berhasil ditambahkan!");

    // reset jika bukan edit
    if (!initialData) {
      setForm({
        id: null,
        nim: "",
        nama: "",
        tempat: "",
        umur: "",
        pekerjaan: "",
        foto: "",
      });
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{initialData ? "Edit Mahasiswa" : "Input Mahasiswa"}</h2>

      <label>NIM</label>
      <input name="nim" value={form.nim} onChange={handleChange} />

      <label>Nama</label>
      <input name="nama" value={form.nama} onChange={handleChange} />

      <label>Tempat Tinggal</label>
      <input name="tempat" value={form.tempat} onChange={handleChange} />

      <label>Umur</label>
      <input name="umur" type="number" value={form.umur} onChange={handleChange} />

      <label>Pekerjaan</label>
      <input name="pekerjaan" value={form.pekerjaan} onChange={handleChange} />

      <label>Foto (opsional)</label>
      <input type="file" accept="image/*" onChange={handleFile} />
      {form.foto && (
        <div className="preview">
          <img src={form.foto} alt="preview" />
        </div>
      )}

      <div className="form-actions">
        <button type="submit">{initialData ? "Simpan Perubahan" : "Simpan"}</button>
      </div>
    </form>
  );
}
