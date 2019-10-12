/**
 * ************************************
 *
 * @module  appReducer
 * @author Austin Ruby and Michael Evans
 * @date 10/12/2019
 * @description reducer for app data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  appPage: 'login',
  dashboardPage: 'home',
  ownerName: null,
  pets: null,
  activePet: null,
}

const appReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.LOGIN:
      // send POST to server with credentials

        // if success, update state with pet info and appPage = dashboard

        // if failure/error, update state with appPage = signup + signup message
      console.log('login type successful')
      return state;
    case types.SIGNUP:
      // send POST to server with credentials/reg info

      // if success update state with appPage = dashboard

      // if failure/error, update state with error message
      console.log('signup type successful')
      return state;
    case types.CHANGE_DB_PAGE:
      // if payload.pageName = 'home', update state with dashboardPage = home and activePet = null

      // if payload.pageName = 'profile', update state with dashboardPage = profile and activePet = payload.activePet

      console.log('change db page successful')
    case types.SAVE_PET:
      // if pet exists in state

        // send PATCH request with payload
  }
}

export default appReducer;