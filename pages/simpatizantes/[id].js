import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import { FirebaseContext } from "../../firebase";

const Simpatizante = () => {
  //State del componente
  const [simpatizante, setSimpatizante] = useState({});
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
        /*  console.log(docSnap.data().simpatizante.nombre); */
        /* console.log(datos); */
        setSimpatizante(datos);
      };
      obtenerSimpatizante();
    }
  }, [id]);

  return <h1>Desde {id}</h1>;
};

export default Simpatizante;
