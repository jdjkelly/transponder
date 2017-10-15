import { combineReducers } from 'redux';
import web3Reducer from './reducers/web3';
import squawkReducer from './reducers/squawk';

const reducer = combineReducers({
  web3: web3Reducer,
  squawks: squawksReducer
})

export default reducer;
