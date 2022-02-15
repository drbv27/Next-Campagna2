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
              Registro Simpatizantes
            </h1>
            <form onSubmit={handleSubmit} noValidate>
              <Flex>
                <Grupo>
                  <legend>Datos Personales</legend>
                  <MyInput>
                    <label htmlFor="cedula">Cédula: </label>
                    <input
                      type="number"
                      id="cedula"
                      placeholder="Ingresa la cédula"
                      name="cedula"
                      value={cedula}
                      onChange={handleChange}
                    />
                  </MyInput>
                  {errores.cedula && <Error>{errores.cedula}</Error>}
                  <MyInput>
                    <label htmlFor="nombre">Nombre Completo: </label>
                    <input
                      type="text"
                      id="nombre"
                      placeholder="Ingresa Nombre y Apellidos"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                    />
                  </MyInput>
                  {errores.nombre && <Error>{errores.nombre}</Error>}
                  <MyInput>
                    <label htmlFor="direccion">Dirección: </label>
                    <input
                      type="text"
                      id="direccion"
                      placeholder="Ingresa La Direccion"
                      name="direccion"
                      value={direccion}
                      onChange={handleChange}
                    />
                  </MyInput>
                  {errores.direccion && <Error>{errores.direccion}</Error>}
                  <MyInput>
                    <label htmlFor="telefono">Teléfono: </label>
                    <input
                      type="number"
                      id="telefono"
                      placeholder="Ingresa Numero de telefono"
                      name="telefono"
                      value={telefono}
                      onChange={handleChange}
                    />
                  </MyInput>

                  {errores.telefono && <Error>{errores.telefono}</Error>}
                </Grupo>
                <Grupo>
                  <legend>Información Electoral</legend>
                  <MyInput>
                    <label htmlFor="comuna">Comúna: </label>
                    <input
                      type="text"
                      id="comuna"
                      placeholder="Ingresa La Comuna"
                      name="comuna"
                      value={comuna}
                      onChange={handleChange}
                    />
                  </MyInput>
                  {errores.comuna && <Error>{errores.comuna}</Error>}
                  <MyInput>
                    <label htmlFor="puesto">Puesto de Votación </label>
                    <input
                      type="text"
                      id="puesto"
                      placeholder="Ingresa el puesto"
                      name="puesto"
                      value={puesto}
                      onChange={handleChange}
                    />
                  </MyInput>
                  {errores.puesto && <Error>{errores.puesto}</Error>}
                  <MyInput>
                    <label htmlFor="lider">Lider </label>
                    <input
                      type="text"
                      id="lider"
                      placeholder="Ingresa Nombre y Apellidos Lider"
                      name="lider"
                      value={lider}
                      onChange={handleChange}
                    />
                  </MyInput>
                  {errores.lider && <Error>{errores.lider}</Error>}
                </Grupo>
              </Flex>
              {error && <Error>{error}</Error>}
              <InputSubmit type="submit" value="Registrar Simpatizante" />
            </form>
          </>
        </Principal>
      </Layout>
    </div>
  );
};

export default Registro;
