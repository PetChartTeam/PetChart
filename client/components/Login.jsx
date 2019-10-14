/**
 * ***********************************
 *
 * @module Login
 * @author Austin Ruby and Michael Evans
 * @date 10/12/2019
 * @description functional component that sends
 * login info to database
 *
 * ***********************************
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(actions.login(email, password))
})

const Login = () => (
  <div>Truck yeah</div>
)

export default connect(null, mapDispatchToProps)(Login)