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

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

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
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombres: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingrese sus nombres"
          value={form.name}
          onChange={handleChange} //{(e) => setNombres(e.target.value)}
        />
        <label htmlFor="lastname">Apellidos: </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Ingrese sus apellidos"
          value={form.lastname}
          onChange={handleChange} //(e) => setApellidos(e.target.value)}
        />

        <label>Sexo:</label>
        <br />
        <input
          type="radio"
          id="masculino"
          name="sex"
          value="masculino"
          onChange={handleChange}
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
        <label>Elige tu Documento de Identidad</label>
        <select name="identity" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="carnet">Carnet de Extranjería</option>
          <option value="dni">DNI</option>
        </select>
        <label htmlFor="terms">Acepta Términos y Condiciones </label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="promotion">Acepta envío de ofertas por correos </label>
        <input
          type="checkbox"
          id="promotion"
          name="promotion"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={dataToEdit ? "Editar" : "Agregar"} />
        <input
          type="reset"
          value={dataToEdit ? "Cancelar" : "Limpiar"}
          onClick={handleReset}
        />
      </form>
    </div>
  );
};

export default CrudForm;
