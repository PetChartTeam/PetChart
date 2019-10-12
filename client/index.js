import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import store from './store';
import { Provider } from 'react-redux';

// import styles from './css/application.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
