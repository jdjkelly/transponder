import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import getWeb3 from './utils/getWeb3';

import TransponderContract from '../build/contracts/Transponder.json'

// Redux Store
import store from './store'

const instantiateContract = function() {
  const contract = require('truffle-contract');
  const transponder = contract(TransponderContract);
  transponder.setProvider(store.getState().web3.web3Instance.currentProvider);
  
  store.dispatch({
    type: 'SET_CONTRACT',
    contract: transponder
  })
}

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
  instantiateContract();
})
.catch(() => {
  console.log('Error in web3 initialization.')
});

ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
