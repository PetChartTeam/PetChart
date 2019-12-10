/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

import appReducer from './appReducer';

const reducers = combineReducers({
  app: appReducer,
});

export default reducers;
