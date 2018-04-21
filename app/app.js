import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import './app.scss';
import configureStore from './configureStore';
import App from './components/App/App';

const root = document.getElementById('app');
const store = configureStore(window.__INITIAL_STATE__);

render(
  <Provider store={store} >
    <App />
  </Provider>,
  root,
);
