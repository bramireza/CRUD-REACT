import React from "react";

function CrudTableRow({ el, setDataToEdit, deleteData }) {
  return (
    <tr>
      <td>{el.name} </td>
      <td>{el.lastname}</td>
      <td>{el.sex}</td>
      <td>{el.identity === "dni" ? "DNI" : "Carnet de extranjería"}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(el.id)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default CrudTableRow;
