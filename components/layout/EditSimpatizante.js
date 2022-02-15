import React from "react";
import styled from "@emotion/styled";

const Titulo = styled.h1`
  text-align: center;
`;

const Contbotones = styled.div`
  text-align: center;
  margin: 20px;
`;

const Btnguardar = styled.a`
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
`;
const Btnborrar = styled.a`
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
`;

const EditSimpatizante = ({ datos }) => {
  const { cedula, nombre, direccion, telefono, comuna, puesto, lider, creado } =
    datos;
  console.log(datos);
  return (
    <>
      <Titulo>Simpatizante: {nombre}</Titulo>
      <form action="">
        <fieldset>
          <legend>Datos Personales</legend>
          <label htmlFor="cedula">Cédula:</label>
          <input type="number" id="cedula" name="cedula" value={cedula} />
          <label htmlFor="cedula">Nombre Completo:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} />
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={direccion}
          />
          <label htmlFor="telefono">Teléfono:</label>
          <input type="number" id="telefono" name="telefono" value={telefono} />
        </fieldset>
        <fieldset>
          <legend>Información Electoral</legend>
          <label htmlFor="comuna">Comúna:</label>
          <input type="text" id="comuna" name="comuna" value={comuna} />
          <label htmlFor="puesto">Puesto de Votación:</label>
          <input type="text" id="puesto" name="puesto" value={puesto} />
          <label htmlFor="comuna">Lider:</label>
          <input type="text" id="lider" name="lider" value={lider} />
        </fieldset>
        <Contbotones>
          <Btnguardar href="#">Guardar</Btnguardar>
          <Btnborrar href="#">Eliminar</Btnborrar>
        </Contbotones>
      </form>
    </>
  );
};

export default EditSimpatizante;
