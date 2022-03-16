import React, { useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import {
  Formulario,
  Formulario2,
  Campo,
  Campo2,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";

import Select from "../components/ui/Select";

import { FirebaseContext } from "../firebase";
import firebase from "../firebase/firebase";

import {
  collection,
  addDoc,
  doc,
  setDoc,
  getFirestore,
} from "firebase/firestore";

import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearSimpatizante from "../validacion/validarCrearSimpatizante";

const Principal = styled.div`
  margin-left: 200px;
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;

const MyInput = styled.div`
  display: flex;
  margin-top: 0.8rem;
  label {
    font-size: 1rem;
  }
  input {
    flex: 1;
    padding: 0.2rem;
    margin-left: 1rem;
  }
`;

const Grupo = styled.fieldset`
  flex: 1;
  background-color: #fafafa;
  border: 1px solid #e1e1e1;
  text-align: left;
`;

const STATE_INICIAL = {
  cedula: "",
  nombre: "",
  direccion: "",
  telefono: "",
  comuna: "",
  puesto: "",
  lider: "",
};

const Registro = () => {
  const router = useRouter();
  const [error, guardarError] = useState(false);

  const { valores, errores, submitForm, handleSubmit, handleChange } =
    useValidacion(STATE_INICIAL, validarCrearSimpatizante, crearSimpatizante);

  const { cedula, nombre, direccion, telefono, comuna, puesto, lider } =
    valores;

  //context con operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  async function crearSimpatizante() {
    //si el usuario no esta autenticado llevar al login
    if (!usuario) {
      return router.push("/login");
    }
    //crear el onjeto de nuevo simpatizante
    const simpatizante = {
      cedula,
      nombre,
      direccion,
      telefono,
      comuna,
      puesto,
      lider,
      creado: Date.now(),
    };
    console.log(simpatizante);
    //insertar en la base de datos
    const db = getFirestore();
    /*     const docRef = await addDoc(collection(db, "simpatizantes"), {
      simpatizante,
    }); */

    await setDoc(doc(db, "pruebas", cedula), { simpatizante });
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
              Configuración
            </h1>
            <div>
              <button>Modo</button>
              <button>colores</button>
              <button>valores</button>
              <button>reset</button>
            </div>
          </>
        </Principal>
      </Layout>
    </div>
  );
};

export default Registro;
