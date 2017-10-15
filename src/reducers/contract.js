const initialState = false;

const contractReducer = (state = initialState, action) => {
  if (action.type === 'SET_CONTRACT') {
    return Object.assign({}, state, action.contract)
  };

  return state;
}

export default contractReducer;
