import React, { useState, useContext, useRef } from "react";
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
  //context con operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);
  console.log(comunas);
  const [idPuestos, setIdPuestos] = useState(-1);
  const [simpatizante, setSimpatizante] = useState({});

  const handleSetPuestos = function (e) {
    const opcion = e.target.value;
    console.log("comuna", e.target.value);
    setIdPuestos(opcion);
  };
  async function submit(e) {
    e.preventDefault();
    const db = getFirestore();
    const form = new FormData();
    form.append("cedula", cedula.current.value);
    form.append("nombre", nombre.current.value);
    form.append("direccion", direccion.current.value);
    form.append("telefono", telefono.current.value);
    form.append("comuna", comuna.current.value);
    form.append("puesto", puesto.current.value);
    form.append("lider", lider.current.value);
    const creado = Date.now();
    form.append("creado", creado);
    const data = Array.from(form);
    const simpatizante = Object.fromEntries(data);
    /* console.log(simpatizante); */
    setSimpatizante(simpatizante);
    //si el usuario no esta autenticado llevar al login
    if (!usuario) {
      return router.push("/login");
    }
    //insertar en la base de datos
    console.log(simpatizante.cedula);
    console.log("simpatizante:", simpatizante);

    await setDoc(doc(db, "pruebas", simpatizante.cedula), { simpatizante });
  }
  const cedula = useRef();
  const nombre = useRef();
  const direccion = useRef();
  const telefono = useRef();
  const comuna = useRef();
  const puesto = useRef();
  const lider = useRef();
  const funcion = useRef();
  const router = useRouter();
  const [error, guardarError] = useState(false);

  /*  const { valores, errores, submitForm, handleSubmit, handleChange } =
    useValidacion(STATE_INICIAL, validarCrearSimpatizante, crearSimpatizante); */

  /* const { cedula, nombre, direccion, telefono, comuna, puesto, lider } =
    valores; */

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
            <form onSubmit={submit}>
              <fieldset>
                <legend>Datos personales</legend>
                <label htmlFor="cedula">Cédula:</label>
                <input type="number" name="cedula" ref={cedula} />
                <label htmlFor="nombre">Nombre Completo:</label>
                <input type="text" name="nombre" ref={nombre} />
                <label htmlFor="direccion">Dirección::</label>
                <input type="text" name="direccion" ref={direccion} />
                <label htmlFor="telefono">Telefono:</label>
                <input type="text" name="telefono" ref={telefono} />
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
                <label htmlFor="lider">Perfil: </label>
                <select name="funcion" id="funcion" ref={funcion}>
                  <option value="">-- -- --</option>
                  <option value="pregonero">Pregonero</option>
                  <option value="testigo">Testigo</option>
                  <option value="coordinador">Coordinador</option>
                  <option value="lider">Lider</option>
                </select>
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
