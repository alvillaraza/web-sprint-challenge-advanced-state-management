import axios from "axios";
// import { response } from "express";

//action types
export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

//Action creators
export const fetchSmurfs = () => {
  //create
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log('this is res', res.data);
        dispatch({type: FETCH_SUCCESS, payload: res.data})
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: FETCH_ERROR, payload: []})
      });
  };
};

//state machine - what will the states be when requesting/retrieving data
//fetch smurf info --> fetch_success --> fetch_error
//define action types
//build action creator
//send request
//handle our states for us
