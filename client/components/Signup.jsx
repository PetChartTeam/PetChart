/**
 * ***********************************
 *
 * @module Signup
 * @author Austin Ruby and Michael Evans
 * @date 10/12/2019
 * @description functional component that sends
 * registration info to database
 *
 * ***********************************
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
  signup: (firstName, lastName, email, password) => dispatch(actions.signup(firstName, lastName, email, password))
})

const Signup = () => (
  <div>Fuck yeah</div>
)

export default connect(null, mapDispatchToProps)(Signup)