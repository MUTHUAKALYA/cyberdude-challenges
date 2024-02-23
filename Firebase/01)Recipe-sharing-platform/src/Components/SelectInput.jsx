import React from "react";

const SelectInput = ({name,register}) => {
  return (
    <div>
      <select name={name} {...register} className="w-full px-5 py-2">
      <option value="select">Select Food Category</option>
        <option value="Veg">veg</option>
        <option value="Non-Veg">Non-veg</option>
        <option value="vegan">Vegan</option>
       
      </select>
    </div>
  );
};

export default SelectInput;
