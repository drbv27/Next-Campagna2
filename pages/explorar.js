import React, { useState, useEffect, useContext } from "react";

import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Tabla } from "../components/ui/Tabla";
import Simpatizantes from "./simpatizantes";
import { FirebaseContext } from "../firebase";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import DetalleSimpatizante from "../components/layout/DetalleSimpatizante";

const Principal = styled.div`
  margin-left: 200px;
`;

export default function Explorar() {
  let busqueda = "";
  const [simpatizantes, setSimpatizantes] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const db = getFirestore();

  useEffect(() => {
    const obtenerSimpatizante = async () => {
      const q = query(collection(db, "pruebas"));

      const querySnapshot = await getDocs(q);
      const people = [];
      const simpatizantess = querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        /*  console.log(doc.id, " => ", doc.data()); */
        const {
          cedula,
          nombre,
          direccion,
          telefono,
          comuna,
          puesto,
          lider,
          creado,
        } = doc.data().simpatizante;
        const person = {
          cedula,
          nombre,
          direccion,
          telefono,
          comuna,
          puesto,
          lider,
          creado,
        };
        people.push(person);
      });
      setSimpatizantes(people);
    };
    obtenerSimpatizante();
  }, []);
  console.log(simpatizantes);
  const [buscar, setBuscar] = useState("");
  const [resultado, guardarResultado] = useState([]);
  const buscarSimpatizante = (e) => {
    e.preventDefault();
    const busqueda = buscar.toLowerCase();
    const filtro = simpatizantes.filter((simpatizante) => {
      return (
        simpatizante.nombre.toLowerCase().includes(busqueda) ||
        simpatizante.cedula.toLowerCase().includes(busqueda) ||
        simpatizante.comuna.toLowerCase().includes(busqueda) ||
        simpatizante.puesto.toLowerCase().includes(busqueda)
      );
    });
    guardarResultado(filtro);
  };

  return (
    <div>
      <Layout>
        <Principal>
          <form onSubmit={buscarSimpatizante}>
            <input
              type="text"
              placeholder="Buscar Simpatizantes"
              onChange={(e) => setBuscar(e.target.value)}
            />
          </form>
          <div
            css={css`
              margin: 2rem 1rem 1rem 1rem;
              text-align: center;
            `}
          >
            <Tabla>
              <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                {/*                 <th>Dirección</th>
                <th>Teléfono</th> */}
                <th>Comuna</th>
                <th>Puesto Votacion</th>
                {/* <th>Lider</th> */}
                <th>Detalle</th>
              </tr>
              {resultado.map((simpatizante) => (
                <DetalleSimpatizante
                  key={simpatizante.cedula}
                  simpatizante={simpatizante}
                />
              ))}
            </Tabla>
          </div>
        </Principal>
      </Layout>
    </div>
  );
}
