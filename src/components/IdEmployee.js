//Componente para guardar el ID del empleado en el local storage
import { useState } from "react";
import Button from '@mui/material/Button'


export const IdEmployee = () => {
  const [employeeId, setEmployeeId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("employee_id", employeeId);
    setEmployeeId("");
    console.log(employeeId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="employee_id">ID Empleado</label>
      <input
        type="text"
        placeholder="ID"
        //value={employeeId} //Muestra "ID" en la caja de texto al guardar el ID
        onChange={(e) => setEmployeeId(e.target.value)}
      />
        <Button variant="outlined" type="text">Guardar</Button>
    </form>
  );
};
