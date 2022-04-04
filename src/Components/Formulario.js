import React, { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({});
  //const [nombres, setNombres] = useState("");
  //const [apellidos, setApellidos] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario Enviado!!!");
  };

  return (
    <>
      <h1>Formulario nro 1</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombres">Nombres: </label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          placeholder="Ingrese sus nombres"
          value={form.nombres}
          onChange={handleChange} //{(e) => setNombres(e.target.value)}
        />
        <br />
        <label htmlFor="apellidos">Apellidos: </label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          placeholder="Ingrese sus apellidos"
          value={form.apellidos}
          onChange={handleChange} //(e) => setApellidos(e.target.value)}
        />

        <br />
        <p>Sexo:</p>
        <input
          type="radio"
          id="masculino"
          name="sexo"
          value="masculino"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="masculino">Masculino </label>
        <input
          type="radio"
          id="femenino"
          name="sexo"
          value="femenino"
          onChange={handleChange}
        />
        <label htmlFor="femenino">Femenino </label>
        <br />
        <p>Elige tu Documento de Identidad</p>
        <select name="identidad" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="carnet">Carnet de Extrenjería</option>
          <option value="dni">DNI</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepta Términos y Condiciones </label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <label htmlFor="promociones">
          Acepta envio de correo para promociones
        </label>
        <input
          type="checkbox"
          id="promociones"
          name="promociones"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
