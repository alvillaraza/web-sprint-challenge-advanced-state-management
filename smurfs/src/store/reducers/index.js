import { FETCH_SMURFS, FETCH_ERROR, FETCH_SUCCESS } from "../actions";

const initialState = {
  smurfs: [],
  loadingSmurfs: true,
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
        loadingSmurfs: false
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        loadingSmurfs: false
      };
    
    default:
      return state;
  }
};