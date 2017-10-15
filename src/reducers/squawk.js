const initialState = {
  log: []
};

const squawkReducer = (state = initialState, action) => {
  if (action.type === 'SQUAWK_RECEIVED') {
    return Object.assign({}, state, {
      log: [
        action.squawk,
        ...state.log
      ]
    })
  };

  return state;
}

export default squawkReducer;
