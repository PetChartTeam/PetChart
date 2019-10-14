/**
 * ***********************************
 *
 * @module MainContainer
 * @author Austin Ruby and Michael Evans
 * @date 10/12/2019
 * @description stateful component that renders 
 * login, dashboard, or signup
 *
 * ***********************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login.jsx'; 
import Signup from '../components/Signup.jsx';
import * as actions from '../actions/actions';
import { type } from 'os';

const mapStateToProps = (state) => ({
  appPage: state.app.appPage,
});

const mapDispatchToProps = dispatch => ({
  //login: (email, password) => dispatch(actions.login(email, password))
  publicPage: (newPage) => dispatch(actions.changePublicPage(newPage)),
  createUserProfile: (profile) => dispatch(actions.saveProfile(profile))
})

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.verifyUser = this.verifyUser.bind(this);
  }

  verifyUser (event) {
    event.preventDefault();   
    const form = document.getElementById("loginForm");
    const email = form[0].value;
    const password = form[1].value;
    const credentials = {email, password};

    console.log(credentials)

    /*new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('foo');
      }, 1000);
    })
    .then(resolve => {
        alert(resolve);
        console.log('checking props',this.props);
        this.props.createUserProfile('userProfile')
      }
    )
    .catch(err => console.log(err));*/

    //package into object
    let method = 'POST';
    console.log(credentials)
    fetch('accounts/register', {
        method,
        body: JSON.stringify(credentials),
        headers: {'Content-Type': 'application/json'},
      })
      .then(res => res.text())
      .then(userProfile => {
        console.log(userProfile);
        this.props.createUserProfile('userProfile')
      }) //dispatch pets to reducer
      .catch(err => console.log('getProfile: ERROR: ', err));
    
  }

  render() {

    // render different components depending on app state
    //console.log(props);
    switch (this.props.appPage) {
      case 'login':
        return (
          <Login publicPage = {this.props.publicPage} saveProfile = {this.verifyUser}/>
        );
      case 'dashboard':
        return (
          <Dashboard />
        );
      case 'signup':
        return (
          <Signup publicPage = {this.props.publicPage}/>
        );
      default:
        console.log('the props.appPage is undefined')
        break;
    }
  }
}



// const MainContainer = (props) => {
//     // render different components depending on app state
//     //console.log(props);
//     switch (props.appPage) {
//       case 'login':
//         return (
//           <Login publicPage = {props.publicPage} saveProfile = {verifyUser}/>
//         );
//       case 'dashboard':
//         return (
//           <Dashboard />
//         );
//       case 'signup':
//         return (
//           <Signup publicPage = {props.publicPage}/>
//         );
//       default:
//         console.log('the props.appPage is undefined')
//         break;
//     }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // render different components depending on app state
//     switch (this.props.appPage) {
//       case 'login':
//         return (
//           <Login />
//         );
//       case 'dashboard':
//         return (
//           <Dashboard />
//         );
//       case 'signup':
//         return (
//           <Signup />
//         );
//       default:
//         break;
//     }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
