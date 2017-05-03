import {createStore} from 'redux';

function reducer(state, action) {
  switch(action.type) {
  case 'INCREASE_COUNTER':
    return { ...state, counter: (state.counter + 1) };
    break;
  case 'RESET_COUNTER':
    return { ...state, counter: 0 };
    break;
  default:
    return state;
  }
}
/*
params of createStore:
reducer - dispatch's callback function(state, action),
beginState - object
 */
const store = createStore(reducer, {
  issues: [],
  repository: '',
  counter: 0,
});

export default store;
