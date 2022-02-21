import React, { useState } from "react";
import SelectList from "./SelectList";
import { comunas } from "../../data/comunas";

const Select = () => {
  console.log(comunas);
  const [idPuestos, setIdPuestos] = useState(-1);

  const handleSetPuestos = function (e) {
    const opcion = e.target.value;
    console.log("comuna", e.target.value);
    setIdPuestos(opcion);
  };

  return (
    <>
      <select name="comuna" id="comuna" onChange={handleSetPuestos}>
        <option value={-1}>-- -- --</option>
        {comunas.map((item, i) => (
          <option key={"comuna" + (i + 1)} value={i}>
            {item.nombre}
          </option>
        ))}
      </select>
      <select name="puesto" id="puesto">
        <option value={-1}>-- -- --</option>
        {idPuestos > -1 &&
          comunas[idPuestos].puestos.map((item, i) => (
            <option key={"puesto" + (i + 1)} value={i}>
              {item}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
