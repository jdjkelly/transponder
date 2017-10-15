import { createStore } from 'redux';

import { combineReducers } from 'redux';

import web3Reducer from './reducers/web3';
import squawkReducer from './reducers/squawk';
import contractReducer from './reducers/contract';

const reducer = combineReducers({
  web3: web3Reducer,
  squawks: squawkReducer,
  contract: contractReducer
})

const store = createStore(reducer);

export default store;
