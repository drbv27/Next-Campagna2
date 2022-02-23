import React from "react";
import styled from "@emotion/styled";
import { Formulario } from "../ui/Formulario";

const Titulo = styled.h1`
  text-align: center;
  padding-bottom: 2rem;
`;

const Fomulario = styled.div`
  display: flex;
`;
const Bloque = styled.fieldset`
  background-color: #ecefe0;
  flex: 1;
`;
const Leyenda = styled.legend`
  font-weight: bold;
  font-size: 1.1rem;
`;

const Inputs = styled.div`
  display: flex;
  margin-top: 0.8rem;

  label {
    font-size: 1rem;
    flex: 0 0 100px;
  }
  input {
    flex: 1;
    padding: 0.2rem;
    margin-left: 1rem;
  }
`;

const Contbotones = styled.div`
  display: flex;
  text-align: center;
  margin: 20px;
`;

const Btnguardar = styled.a`
  flex: 1;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  background-color: blue;
  color: white;
  &:hover {
    background-color: green;
    transition: 0.5seg;
  }
`;
const Btnborrar = styled.a`
  flex: 1;
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
            <Leyenda>Datos Personales</Leyenda>
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
            <Leyenda>Información Electoral</Leyenda>
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
