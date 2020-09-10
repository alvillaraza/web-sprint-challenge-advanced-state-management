import React, {useEffect} from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions";

function App({fetchSmurfs, loadingSmurfs}) {
  //build a useEffect to trigger our action
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs])
  //build a case for loading state
  //show loader when fetching facts
  // show facts when we have them on the screen

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      {!loadingSmurfs ? <Smurfs /> : <div>...loading Smurfs</div>}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingSmurfs: state.loadingSmurfs,
  };
}

export default connect(mapStateToProps, { fetchSmurfs })(App);

//this project starts off as class component first
