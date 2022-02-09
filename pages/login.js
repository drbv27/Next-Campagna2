import React from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";

const Principal = styled.div`
  margin-left: 200px;
  text-align: center;
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Principal>
          <>
            <h1>Ingreso de Usuarios</h1>
            <Formulario>
              <Campo>
                <label htmlFor="nombre">Nombre de Usuario</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Ingresa tu Usuario"
                  name="nombre"
                />
              </Campo>
              <Campo>
                <label htmlFor="contrasena">Contraseña</label>
                <input
                  type="password"
                  id="contrasena"
                  placeholder="Ingresa tu Contraseña"
                  name="contrasena"
                />
              </Campo>
              <InputSubmit type="submit" value="Ingresar" />
            </Formulario>
          </>
        </Principal>
      </Layout>
    </div>
  );
}
