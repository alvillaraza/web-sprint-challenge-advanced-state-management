const initialState = {
  smurfs: [{ name: "Some smurf name", age: 200, height: "5cm", id: 0 }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
}