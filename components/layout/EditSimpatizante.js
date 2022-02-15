import React from "react";
import styled from "@emotion/styled";
import { Formulario } from "../ui/Formulario";

const Titulo = styled.h1`
  text-align: center;
`;

const Fomulario = styled.div`
  display: flex;
`;
const Bloque = styled.fieldset`
  background-color: #ecefe0;
  flex: 1;
`;

const Inputs = styled.div`
  flex: 1;
  padding-top: 1rem;

  label {
    padding-right: 1rem;
  }
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
  background-color: blue;
  color: white;
  &:hover {
    background-color: green;
  }
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
        <Fomulario>
          <Bloque>
            <legend>Datos Personales</legend>
            <Inputs>
              <label htmlFor="cedula">Cédula:</label>
              <input type="number" id="cedula" name="cedula" value={cedula} />
            </Inputs>
            <Inputs>
              <label htmlFor="cedula">Nombre Completo:</label>
              <input type="text" id="nombre" name="nombre" value={nombre} />
            </Inputs>
            <Inputs>
              <label htmlFor="direccion">Dirección:</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={direccion}
              />
            </Inputs>
            <Inputs>
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="number"
                id="telefono"
                name="telefono"
                value={telefono}
              />
            </Inputs>
          </Bloque>
          <Bloque>
            <legend>Información Electoral</legend>
            <Inputs>
              <label htmlFor="comuna">Comúna:</label>
              <input type="text" id="comuna" name="comuna" value={comuna} />
            </Inputs>
            <Inputs>
              <label htmlFor="puesto">Puesto de Votación:</label>
              <input type="text" id="puesto" name="puesto" value={puesto} />
            </Inputs>
            <Inputs>
              <label htmlFor="comuna">Lider:</label>
              <input type="text" id="lider" name="lider" value={lider} />
            </Inputs>
          </Bloque>
        </Fomulario>
        <Contbotones>
          <Btnguardar href="#">Guardar</Btnguardar>
          <Btnborrar href="#">Eliminar</Btnborrar>
        </Contbotones>
      </form>
    </>
  );
};

export default EditSimpatizante;
