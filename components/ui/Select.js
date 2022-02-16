import React, { useState } from "react";
import SelectList from "./SelectList";
import { comunas } from "../../data/comunas";

const Select = () => {
  /*  console.log(comunas); */
  const [comuna, setComuna] = useState("");
  const [puesto, setPuesto] = useState("");
  return (
    <div>
      <SelectList
        title="comuna"
        url={comunas}
        handleChange={(e) => {
          setComuna(e.target.value);
        }}
      />
      {comuna && (
        <SelectList
          title="puesto"
          url=""
          handleChange={(e) => {
            setPuesto(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default Select;
