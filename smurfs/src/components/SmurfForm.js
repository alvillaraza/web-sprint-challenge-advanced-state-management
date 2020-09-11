import React, { useState } from "react";
import { connect } from 'react-redux';
// import { useState } from 'react';
import { addSmurf } from "../store/actions/smurfActions";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({name: "", age:"", height:""})
  

  const onChange = (e) => {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(newSmurf)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label for="name">Name:</label>
        <input type="text" name="name" values={newSmurf.name} onChange={onChange}></input>
        <p>
          <label for="age">Age:</label>
          <input type="text" name="age" values={newSmurf.age} onChange={onChange}></input>
        </p>
        <p>
          <label for="height">Height:</label>
          <input type="text" name="height" values={newSmurf.height} onChange={onChange}></input>
        </p>
      <button>add</button>
      </form>
    </>
  );
};


export default connect(null, {addSmurf})(SmurfForm);
