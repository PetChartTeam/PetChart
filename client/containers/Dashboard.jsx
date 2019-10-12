/**
 * ***********************************
 *
 * @module Dashboard
 * @author Austin Ruby and Michael Evans
 * @date 10/12/2019
 * @description stateful component that renders 
 * nav bar, home page, and pet profile
 *
 * ***********************************
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../components/Home.jsx'
import Navigation from '../components/Navigation.jsx'
import Profile from '../components/Profile.jsx'

const mapStateToProps = state => ({
  pets: state.pets,
  dashboardPage: state.dashboardPags
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.dashboardPage) {
      case 'home':
        return (
          <div>
            This is the home page
            {/* <Navigation />
            <Home /> */}
          </div>
        );
      case 'profile':
        return (
          <div>
            This is the profile page
            {/* <Navigation />
            <Profile /> */}
          </div>
        );
      default:
        break;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)