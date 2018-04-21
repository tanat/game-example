import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const middlewareList = [
  thunkMiddleware,
];

const finalCreateStore = applyMiddleware(...middlewareList)(createStore);

export default function configureStore(initialState = {}) {
  /* eslint-disable no-underscore-dangle */
  let devtools;
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  return finalCreateStore(
    combineReducers(reducers),
    initialState,
    devtools,
  );
  /* eslint-enable */
}
