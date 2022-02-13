import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import styled from "@emotion/styled";

import Layout from "../../components/layout/Layout";

import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/layout/404";

const Principal = styled.div`
  margin-left: 200px;
`;

const Simpatizante = () => {
  //State del componente
  const [simpatizante, setSimpatizante] = useState({});
  const [error, setError] = useState(false);
  //Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //context de firebase
  const { firebase } = useContext(FirebaseContext);
  const db = getFirestore();

  useEffect(() => {
    if (id) {
      const obtenerSimpatizante = async () => {
        const docRef = doc(db, "pruebas", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("producto existe");
          const {
            cedula,
            nombre,
            direccion,
            telefono,
            comuna,
            puesto,
            lider,
            creado,
          } = docSnap.data().simpatizante;
          const datos = {
            cedula,
            nombre,
            direccion,
            telefono,
            comuna,
            puesto,
            lider,
            creado,
          };
          setSimpatizante(datos);
        } else {
          console.log("producto NO existe");
          setError(true);
        }

        /*  console.log(docSnap.data().simpatizante.nombre); */
        /* console.log(datos); */
      };
      obtenerSimpatizante();
    }
  }, [id]);

  /*  if (error) return <Error404 />;
  return <h1>Desde {id}</h1>; */

  return (
    <div>
      <Layout>
        <Principal>{error ? <Error404 /> : <h1>Desde {id}</h1>}</Principal>
      </Layout>
    </div>
  );
};

export default Simpatizante;
