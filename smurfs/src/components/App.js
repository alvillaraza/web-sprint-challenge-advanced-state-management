import React, { useEffect } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions";

function App({ fetchSmurfs, loadingSmurfs, errorMessage }) {

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);
 


  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      {!loadingSmurfs ? <Smurfs /> : <div>...loading Smurfs</div>}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      <SmurfForm/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage,
  };
}

export default connect(mapStateToProps, { fetchSmurfs })(App);

//this project starts off as class component first
