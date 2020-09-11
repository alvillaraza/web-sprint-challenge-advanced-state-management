import axios from "axios";
// import { response } from "express";

//action types
export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_SMURF = "ADD_SMURF";

//Action creators
export const fetchSmurfs = () => {
  //create
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log("this is res", res.data);
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_ERROR, payload: { message: "cannot load" } });
      });
  };
};

export const addSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({type: FETCH_SMURFS})
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        console.log("res post", res.data);
        dispatch({ type: ADD_SMURF, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: FETCH_ERROR, payload: {message: 'cannot load'}})
      });
}
};


