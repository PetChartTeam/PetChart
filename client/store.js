/**
 * ***********************************
 *
 * @module store.js
 * @author Austin Ruby and Michael Evans
 * @date 10/12/2019
 * @description Redux 'single source of truth'
 *
 * ***********************************
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  composeWithDevTools(),
);

export default store;
