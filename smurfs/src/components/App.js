import React from "react";
import "./App.css";
import Smurfs from "./Smurfs";

function App() {
  //build a useEffect to trigger our action
  //build a case for loading state
  //show loader when fetching facts
  // show facts when we have them on the screen

 
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs />
      </div>
    );
  }


export default App;


//this project starts off as class component first