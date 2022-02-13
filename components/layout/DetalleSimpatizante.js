import React from "react";
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
      <td>{puesto}</td>
      <td>
        <Detalle>
          {" "}
          <FontAwesomeIcon icon={faFileSignature} />
        </Detalle>
      </td>
      {/* <td>{lider}</td> */}
    </tr>
  );
};

export default DetalleSimpatizante;
