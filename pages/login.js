import React from "react";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarLogin from "../validacion/validarLogin";

const Principal = styled.div`
  margin-left: 200px;
  text-align: center;
`;

const STATE_INICIAL = {
  email: "",
  password: "",
};

export default function Login() {
  const { valores, errores, submitForm, handleSubmit, handleChange } =
    useValidacion(STATE_INICIAL, validarLogin, iniciarSesion);

  const { email, password } = valores;

  function iniciarSesion() {
    console.log("Ingresando...");
  }

  return (
    <div>
      <Layout>
        <Principal>
          <>
            <h1
              css={css`
                margin-top: 2rem;
                color: #1097d5;
              `}
            >
              Ingreso de Usuarios
            </h1>
            <Formulario onSubmit={handleSubmit} noValidate>
              <Campo>
                <label htmlFor="email">Email Usuario</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Ingresa tu Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Campo>
              {errores.email && <Error>{errores.email}</Error>}
              <Campo>
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Ingresa tu Contraseña"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Campo>
              {errores.password && <Error>{errores.password}</Error>}
              <InputSubmit type="submit" value="Ingresar" />
            </Formulario>
          </>
        </Principal>
      </Layout>
    </div>
  );
}
