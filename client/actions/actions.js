/**
 * ***********************************
 *
 * @module actions.js
 * @author Austin Ruby and Michael Evans
 * @date 10/12/2019
 * @description Action Creators
 *
 * ***********************************
 */

import * as types from '../constants/actionTypes';

export const login = (email, password) => ({
  type: types.LOGIN,
  payload: {
    email,
    password,
  },
});

export const signup = (firstName, lastName, email, password) => ({
  type: types.SIGNUP,
  payload: {
    firstName,
    lastName,
    email,
    password,
  },
});

export const changePage = (pageName, petId) => ({
  type: types.CHANGE_DB_PAGE,
  payload: {
    pageName,
    activePet,
  },
});

export const savePet = (petProfile) => ({
  type: types.SAVE_PET,
  payload: petProfile,
});
