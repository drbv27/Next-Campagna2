import React, { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";

const Simpatizante = () => {
  //Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  useEffect(() => {
    if (id) {
      console.log("Ya hay un Id", id);
    }
  }, [id]);

  return <h1>Desde {id}</h1>;
};

export default Simpatizante;
