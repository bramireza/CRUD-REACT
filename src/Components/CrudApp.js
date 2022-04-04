import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialData = [
  {
    id: "1",
    name: "Brayian",
    lastname: "Ramírez",
    sex: "masculino",
    identity: "dni",
    terms: true,
    promotion: true,
  },
  {
    id: "2",
    name: "Antony",
    lastname: "Ramírez",
    sex: "masculino",
    identity: "dni",
    terms: true,
    promotion: true,
  },
  {
    id: "3",
    name: "Brayian",
    lastname: "Aguayo",
    sex: "masculino",
    identity: "dni",
    terms: true,
    promotion: true,
  },
  {
    id: "4",
    name: "Antony",
    lastname: "Aguayo",
    sex: "masculino",
    identity: "dni",
    terms: true,
    promotion: true,
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialData);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {};
  const deleteData = (id) => {};
  return (
    <>
      <h1>CRUD APP</h1>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
      <table></table>
    </>
  );
};

export default CrudApp;
