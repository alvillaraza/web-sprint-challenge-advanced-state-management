import React, { useState } from "react";
import { addSmurf } from "../store/actions/smurfActions";

const SmurfForm = () => {
  const [values, setValues] = useState({name: "", age:"", height:""})
  

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({...values, [name]: value })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    addSmurf(values)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label for="name">Name:</label>
        <input type="text" name="name" values={values.name} onChange={onChange}></input>
        <p>
          <label for="age">Age:</label>
          <input type="text" name="age" values={values.age} onChange={onChange}></input>
        </p>
        <p>
          <label for="height">Height:</label>
          <input type="text" name="height" values={values.height} onChange={onChange}></input>
        </p>
      <button>add</button>
      </form>
    </>
  );
};

export default SmurfForm;
