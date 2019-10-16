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

import React, { Component } from 'react';

//return content to render for the login page
const Login = props => {
  return (
    <div>
      {/* login form: */}
      <form id="loginForm" onSubmit={event => props.saveProfile(event)}>
        <div id="loginLine1">
          <label> Email: </label>
          <input placeholder="email" type="input" id="email"></input>
        </div>
        <div id="loginLine2">
          <label> password: </label>
          <input placeholder="password" type="input" id="password"></input>
        </div>

        <input
          class="loginButton"
          type="button"
          value="Sign up"
          onClick={() => props.publicPage('signup')}
        ></input>
        <input class="loginButton" type="submit" value="login"></input>
      </form>
    </div>
  );
};

export default Login;
