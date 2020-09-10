import React from "react";

function SmurfInfo({ smurf }) {
  return (
    <div>
      <p>Name: {smurf.name}</p>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </div>
  );
}

export default SmurfInfo;
