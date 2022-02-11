import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";

import firebase from "../firebase/firebase";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarLogin from "../validacion/validarLogin";

const Principal = styled.div`
  margin-left: 200px;
  text-align: center;
`;

const Column = styled.div`
  display: flex;
`;

const STATE_INICIAL = {
  email: "",
  password: "",
};

export default function Login() {
  const router = useRouter();
  const [error, guardarError] = useState(false);

  const { valores, errores, submitForm, handleSubmit, handleChange } =
    useValidacion(STATE_INICIAL, validarLogin, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      console.log("usuario autenticado");
      router.push("/");
    } catch (error) {
      console.error("Hubo un error al autenticar el usuario", error.message);
      guardarError(error.message);
    }
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
              Registro Simpatizantes
            </h1>
            <>
              {" "}
              <Formulario onSubmit={handleSubmit} noValidate>
                <Column>
                  <fieldset>
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
                  </fieldset>
                  <fieldset>
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
                  </fieldset>
                </Column>

                {error && <Error>{error}</Error>}

                <InputSubmit type="submit" value="Ingresar" />
              </Formulario>
            </>
          </>
        </Principal>
      </Layout>
    </div>
  );
}
