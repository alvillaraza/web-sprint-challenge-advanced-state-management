import { FETCH_SMURFS, FETCH_ERROR, FETCH_SUCCESS, ADD_SMURF } from "../actions";

const initialState = {
  smurfs: [],
  loadingSmurfs: true,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        loadingSmurfs: true,
        
      };
    
    case FETCH_ERROR:
      return {
        ...state,
        loadingSmurfs: false,
        errorMessage: action.payload.message
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        loadingSmurfs: false
      };
    
    case ADD_SMURF:
      return {
        ...state, 
        loadingSmurfs: false,
        smurfs: action.payload
      }
    
    default:
      return state;
  }
};