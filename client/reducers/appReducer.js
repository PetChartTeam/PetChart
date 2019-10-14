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

const dummyPet = {
  owner: {
    id: 1,
    firstName: 'Ronald',
  },
  pets: [
    {
      id: 1,
      name: 'Fido',
      type: 'dog',
      gender: 'm',
      spayed: true,
      birth_year: 2006,
      vet: 'Dr. Lewis',
      profilePic: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      visits: [ // array of 5 most recent visits (if total < 5, fill in the rest as null)
        {
          id: 1,
          date: '12/10/2018',
          notes: 'annual checkup',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 2,
          date: '6/8/2018',
          notes: 'removing plastic toy from his stomach',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 3,
          date: '12/10/2017',
          notes: 'annual checkup',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 4,
          date: '8/6/2017',
          notes: 'knee surgery',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 5,
          date: '12/10/2016',
          notes: 'annual checkup',
          file: '???',
          vet: 'Dr. Lewis',
        },
      ],
      surgeries: [ // array of 5 most recent surgeries (if total < 5, fill in the rest as null)
        {
          id: 1,
          name: 'knee surgery',
          date: '8/6/2017',
          vet: 'Dr. Lewis',
        },
        {
          id: 2,
          name: 'neutering',
          date: '11/19/2007',
          vet: 'Dr. Schwartz',
        },
        null,
        null,
        null,
      ],
      vaccines: [ // array of 5 most recent vaccines (if total < 5, fill in the rest as null)
        {
          id: 1,
          name: 'influenza',
          date: '12/10/2018',
        },
        {
          id: 2,
          name: 'anti-worms',
          date: '7/31/2014',
        },
        null,
        null,
        null,
      ],
    },
    {
      id: 2,
      name: 'Ernie',
      type: 'cat',
      gender: 'm',
      spayed: true,
      birth_year: 2007,
      vet: 'Dr. Palmer',
      profilePic: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      visits: [ // array of 5 most recent visits (if total < 5, fill in the rest as null)
        {
          id: 1,
          date: '12/10/2018',
          notes: 'annual checkup',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 2,
          date: '6/8/2018',
          notes: 'removing plastic toy from his stomach',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 3,
          date: '12/10/2017',
          notes: 'annual checkup',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 4,
          date: '8/6/2017',
          notes: 'knee surgery',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 5,
          date: '12/10/2016',
          notes: 'annual checkup',
          file: '???',
          vet: 'Dr. Lewis',
        },
      ],
      surgeries: [ // array of 5 most recent surgeries (if total < 5, fill in the rest as null)
        {
          id: 1,
          name: 'knee surgery',
          date: '8/6/2017',
          vet: 'Dr. Lewis',
        },
        {
          id: 2,
          name: 'neutering',
          date: '11/19/2007',
          vet: 'Dr. Schwartz',
        },
        null,
        null,
        null,
      ],
      vaccines: [ // array of 5 most recent vaccines (if total < 5, fill in the rest as null)
        {
          id: 1,
          name: 'influenza',
          date: '12/10/2018',
        },
        {
          id: 2,
          name: 'anti-worms',
          date: '7/31/2014',
        },
        null,
        null,
        null,
      ],
    },
  ],
};

const initialState = {
  appPage: 'dashboard',
  dashboardPage: 'home',
  ownerName: null,
  userProfile: dummyPet,
  activePet: {
    id: null,
    name: null,
    type: null,
    gender: null,
    spayed: null,
    birthYear: null,
    vet: null,
    profilePic: null,
    visits: [],
    surgeries: [],
    vaccines: [],
  },
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      // send POST to server with credentials

      // if success, update state with pet info and appPage = dashboard

      // if failure/error, update state with appPage = signup + signup message
      console.log('login type successful');
      return state;
    case types.SIGNUP:
      // send POST to server with credentials/reg info

      // if success update state with appPage = dashboard

      // if failure/error, update state with error message
      console.log('signup type successful');
      return state;
    case types.CHANGE_DB_PAGE: {
      // if payload.pageName = 'home', update state with dashboardPage = home and activePet = null

      // if payload.pageName = 'profile', update state with dashboardPage = profile and activePet = payload.activePet

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
      const petsArr = state.userProfile.pets;
      // spread empty pet object and overwrite with server response in action payload
      const newPet = {
        ...emptyPet,
        ...responsePet,
      };
      // still need to update state once server response is update by Mike R
      console.log('petsArr: ', petsArr, 'newPet: ', newPet);
      return state; }
    default:
      console.log('default state: ', state);
      return state;
  }
};

export default appReducer;
