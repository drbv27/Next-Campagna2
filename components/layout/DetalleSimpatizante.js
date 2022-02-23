import React from "react";
import Link from "next/link";
import { Detalle } from "../ui/Tabla";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";

const DetalleSimpatizante = ({ simpatizante }) => {
  const { cedula, nombre, direccion, telefono, comuna, puesto, lider, creado } =
    simpatizante;
  /*  console.log(simpatizante); */
  return (
    <tr>
      <td>{cedula}</td>
      <th>{nombre}</th>
      {/*       <td>{direccion}</td>
      <td>{telefono}</td> */}
      <td>{comuna}</td>
      <td>{puesto.toLowerCase()}</td>
      <td>
        <Link href="/simpatizantes/[id]" as={`/simpatizantes/${cedula}`}>
          <Detalle>
            {" "}
            <FontAwesomeIcon icon={faFileSignature} />
          </Detalle>
        </Link>
      </td>
      {/* <td>{lider}</td> */}
    </tr>
  );
};

export default DetalleSimpatizante;
