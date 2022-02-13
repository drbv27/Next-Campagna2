import React, { useState, useEffect, useContext } from "react";

import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
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
        const { nombre, cedula } = doc.data().simpatizante;
        const person = {
          nombre,
          cedula,
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
          <div></div>
        </Principal>
      </Layout>
    </div>
  );
}
