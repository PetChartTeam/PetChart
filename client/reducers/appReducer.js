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
import emptyPet from '../constants/emptyPetObj';
import dummyUserProfile from '../constants/dummyUserProfile';

const initialState = {
  appPage: 'login',
  dashboardPage: 'home',
  ownerName: null,
  userProfile: null,
  activePet: emptyPet,
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PUBLIC_PAGE:

      const newPage = action.payload;

      return {
        ...state,
        appPage: newPage,
      };

      // return state;

    case types.CHANGE_DB_PAGE: {
      console.log('change db page successful');
      const { dashboardPage, activePet } = action.payload;
      return ({
        ...state,
        dashboardPage,
        activePet,
      });
    }
    case types.SAVE_PET: {
      console.log('save pet successful: ', action.payload);
      const responsePet = action.payload;
      // copy pets array from state
      const { userProfile } = state;
      let newPet = {};
      // if active pet id not null (not creating new pet), 
      // spread current active pet into object and overwrite with updated pet object
      if (state.activePet.id) {
        newPet = {
          ...state.activePet,
          ...responsePet
        };
      } else {
        // otherwise spread empty pet object and overwrite with server response in action payload
        newPet = {
          ...emptyPet,
          ...responsePet,
        }
      }
      userProfile.pets.push(newPet);
      // still need to update state once server response is update by Mike R
      console.log('pets array: ', userProfile.pets, 'newPet: ', newPet);
      return {
        ...state,
        userProfile,
        activePet: newPet,
      }; }

    case types.SAVE_PROFILE:

      // alert('user profile loaded!')

      const userProfile = action.payload;

      return {
        ...state,
        appPage: 'dashboard',
        userProfile,
      };

    default:
      return state;
  }
};

export default appReducer;
