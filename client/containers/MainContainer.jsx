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

const mapStateToProps = (state) => ({
  appPage: state.appPage,
});

const MainContainer = (props) => {
    // render different components depending on app state
    switch (props.appPage) {
      case 'login':
        return (
          <Login />
        );
      case 'dashboard':
        return (
          <Dashboard />
        );
      case 'signup':
        return (
          <Signup />
        );
      default:
        break;
        }
}

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

export default connect(mapStateToProps, null)(MainContainer);
