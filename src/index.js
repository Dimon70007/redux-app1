import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './src/state';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

store.subscribe( () =>
 console.log('New state', store.getState()));

 console.log(1);
 store.dispatch({
   type: 'INCREASE_COUNTER'
 });
 console.log(2);
 store.dispatch({
   type: 'INCREASE_COUNTER'
 });
 console.log(3);
 store.dispatch({
   type: 'RESET_COUNTER'
 });
 console.log(4);
 store.dispatch({
   type: 'UNKNOWN'
 });
