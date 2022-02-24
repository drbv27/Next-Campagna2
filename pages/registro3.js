import React, { useState, useContext, useRef } from "react";
import { comunas } from "../data/comunas";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import InputRegistro from "../components/ui/InputRegistro";
import SelectorComuna from "../components/layout/SelectorComuna";
import {
  DatosPersonales,
  InfoImpLab,
  CentrarForm,
  Principal,
} from "../components/layout/FormRegistro";
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
            <CentrarForm>
              <form onSubmit={submit}>
                <DatosPersonales>
                  <h2>Datos personales</h2>
                  <InfoImpLab>
                    {/*  <label htmlFor="cedula">Cédula:</label> */}
                    <InputRegistro
                      type="number"
                      name="cedula"
                      placeholder="Cedúla"
                      ref={cedula}
                    />
                  </InfoImpLab>
                  <InfoImpLab>
                    {/* <label htmlFor="nombre">Nombre Completo:</label> */}
                    <InputRegistro
                      type="text"
                      name="nombre"
                      placeholder="Nombre y Apellido"
                      ref={nombre}
                    />
                  </InfoImpLab>
                  <InfoImpLab>
                    {/* <label htmlFor="direccion">Dirección::</label> */}
                    <InputRegistro
                      type="text"
                      name="direccion"
                      placeholder="Dirección"
                      ref={direccion}
                    />
                  </InfoImpLab>
                  <InfoImpLab>
                    {/* <label htmlFor="telefono">Telefono:</label> */}
                    <InputRegistro
                      type="text"
                      name="telefono"
                      placeholder="Teléfono"
                      ref={telefono}
                    />
                  </InfoImpLab>
                  <SelectorComuna
                    name="comuna"
                    id="comuna"
                    onChange={handleSetPuestos}
                    ref={comuna}
                  >
                    <option value={-1}>Seleccione Comuna</option>
                    {comunas.map((item, i) => (
                      <option key={"comuna" + (i + 1)} value={i}>
                        {item.nombre}
                      </option>
                    ))}
                  </SelectorComuna>
                  <SelectorComuna name="puesto" id="puesto" ref={puesto}>
                    <option value={-1}>Seleccione Puesto Votacion</option>
                    {idPuestos > -1 &&
                      comunas[idPuestos].puestos.map((item, i) => (
                        <option key={"puesto" + (i + 1)} value={i}>
                          {item}
                        </option>
                      ))}
                  </SelectorComuna>
                </DatosPersonales>

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
            </CentrarForm>
          </>
        </Principal>
      </Layout>
    </div>
  );
};

export default Registro;
