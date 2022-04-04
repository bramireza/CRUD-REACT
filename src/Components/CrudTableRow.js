import React from "react";

function CrudTableRow({ el }) {
  return (
    <tr>
      <td>{el.name} </td>
      <td>{el.lastname}</td>
      <td>{el.sex}</td>
      <td>{el.identity === "dni" ? "DNI" : "Carnet de extranjería"}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
}

export default CrudTableRow;
