import React, { useState, useContext, useRef } from "react";
import { useFormik } from "formik";
import { comunas } from "../data/comunas";
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
  const formik = useFormik({
    initialValues: {
      cedula: "",
      nombre: "",
      direccion: "",
      telefono: "",
      comuna: "",
      puesto: "",
      lider: "",
    },
    onSubmit: (values) => console.log(values),
  });

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
            <form onSubmit={formik.handleSubmit}>
              <fieldset>
                <legend>Datos personales</legend>
                <label htmlFor="cedula">Cédula:</label>
                <input
                  type="number"
                  name="cedula"
                  onChange={formik.handleChange}
                  value={formik.values.cedula}
                />
                <label htmlFor="nombre">Nombre Completo:</label>
                <input
                  type="text"
                  name="nombre"
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                />
                <label htmlFor="direccion">Dirección::</label>
                <input
                  type="text"
                  name="direccion"
                  onChange={formik.handleChange}
                  value={formik.values.direccion}
                />
                <label htmlFor="telefono">Telefono:</label>
                <input
                  type="text"
                  name="telefono"
                  onChange={formik.handleChange}
                  value={formik.values.telefono}
                />
              </fieldset>
              <fieldset>
                <legend>Datos Electorales</legend>
                <label htmlFor="comuna">Comuna: </label>
                <select
                  name="comuna"
                  id="comuna"
                  onChange={handleSetPuestos}
                  ref={comuna}
                >
                  <option value={-1}>-- -- --</option>
                  {comunas.map((item, i) => (
                    <option key={"comuna" + (i + 1)} value={i}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
                <label htmlFor="puesto">Puesto: </label>
                <select name="puesto" id="puesto" ref={puesto}>
                  <option value={-1}>-- -- --</option>
                  {idPuestos > -1 &&
                    comunas[idPuestos].puestos.map((item, i) => (
                      <option key={"puesto" + (i + 1)} value={i}>
                        {item}
                      </option>
                    ))}
                </select>
                <label htmlFor="lider">Lider: </label>
                <input type="text" name="lider" ref={lider} />
              </fieldset>
              <button type="submit">Enviar</button>
            </form>
          </>
        </Principal>
      </Layout>
    </div>
  );
};

export default Registro;
