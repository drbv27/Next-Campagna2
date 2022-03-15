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
              Mapa de Calor
            </h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581.1032960038215!2d-75.60310243951704!3d6.258136892713598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44297deb1b6a99%3A0x5260d64756d7f71f!2sCoWest%20Coworking!5e0!3m2!1ses!2sco!4v1647303676342!5m2!1ses!2sco" width={800} height={400} ></iframe>
          </>
        </Principal>
      </Layout>
    </div>
  );
}
