import React from "react";

const EditSimpatizante = ({ datos }) => {
  const { cedula, nombre, direccion, telefono, comuna, puesto, lider, creado } =
    datos;
  console.log(datos);
  return <h1>Edit Simpatizante {nombre}</h1>;
};

export default EditSimpatizante;
