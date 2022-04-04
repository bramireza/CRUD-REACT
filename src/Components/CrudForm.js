import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  lastname: "",
  id: null,
  sex: "masculino",
  identity: "",
  terms: false,
  promotion: false,
};
const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.lastname) {
      alert("Datos Incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombres">Nombres: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingrese sus nombres"
          value={form.name}
          onChange={handleChange} //{(e) => setNombres(e.target.value)}
        />
        <br />
        <label htmlFor="apellidos">Apellidos: </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Ingrese sus apellidos"
          value={form.lastname}
          onChange={handleChange} //(e) => setApellidos(e.target.value)}
        />

        <br />
        <p>Sexo:</p>
        <input
          type="radio"
          id="masculino"
          name="sex"
          value="masculino"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="masculino">Masculino </label>
        <input
          type="radio"
          id="femenino"
          name="sex"
          value="femenino"
          onChange={handleChange}
        />
        <label htmlFor="femenino">Femenino </label>
        <br />
        <p>Elige tu Documento de Identidad</p>
        <select name="identity" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="carnet">Carnet de Extrenjería</option>
          <option value="dni">DNI</option>
        </select>
        <br />
        <label htmlFor="terms">Acepta Términos y Condiciones </label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="promotion">
          Acepta envio de correo para promociones{" "}
        </label>
        <input
          type="checkbox"
          id="promociones"
          name="promociones"
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
