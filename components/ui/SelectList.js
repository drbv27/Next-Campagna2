import React from "react";

const SelectList = ({ title, url, handleChange }) => {
  let options = url;
  let puesto;
  console.log(options);
  return (
    <>
      <label htmlFor={title}></label>
      <select name={title} id={title}>
        <option value="">--- ---</option>
        {options.map(
          (opcion) => (
            <option value={opcion.valor} key={opcion.valor}>
              {opcion.valor} {opcion.texto}
            </option>
          )

          /* console.log(opcion.valor, opcion.texto); */
        )}
      </select>
    </>
  );
};

export default SelectList;
