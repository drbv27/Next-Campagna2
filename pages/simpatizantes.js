import React, { useState, useEffect, useContext } from "react";

import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Tabla } from "../components/ui/Tabla";
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

export default function Simpatizantes() {
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

  return (
    <div>
      <Layout>
        <Principal>
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
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Comuna</th>
                <th>Puesto Votacion</th>
                <th>Lider</th>
              </tr>
              {simpatizantes.map((simpatizante) => (
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
