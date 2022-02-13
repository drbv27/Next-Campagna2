import React from "react";

const DetalleSimpatizante = ({ simpatizante }) => {
  const { cedula, nombre, direccion, telefono, comuna, puesto, lider, creado } =
    simpatizante;
  /*  console.log(simpatizante); */
  return (
    <tr>
      <td>{cedula}</td>
      <th>{nombre}</th>
      <td>{direccion}</td>
      <td>{telefono}</td>
      <td>{comuna}</td>
      <td>{puesto}</td>
      <td>{lider}</td>
    </tr>
  );
};

export default DetalleSimpatizante;
