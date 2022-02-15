import React from "react";

const Select = () => {
  return (
    <div>
      <label for="comuna">-- -- --</label>

      <select name="cars" id="cars">
        <option value="C1 Popular">Comuna 1 Popular</option>
        <option value="C2 Santa Cruz">Comuna 2 Santa Cruz</option>
        <option value="C3 Manrique">Comuna 3 Manrique</option>
        <option value="C4 Aranjuez">Comuna 4 Aranjuez</option>
        <option value="C5 Castilla">Comuna 5 Castilla</option>
        <option value="C6 Doce de Octubre">Comuna 6 Doce de Octubre</option>
        <option value="C7 Robledo">Comuna 7 Robledo</option>
        <option value="C8 Villa Hermosa">Comuna 8 Villa Hermosa</option>
        <option value="C9 Buenos Aires">Comuna 9 Buenos Aires</option>
        <option value="C10 La Candelaria">Comuna 10 La Candelaria</option>
      </select>
    </div>
  );
};

export default Select;
