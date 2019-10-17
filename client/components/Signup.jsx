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

import React, { Component } from 'react';


const Signup = (props) => {
  console.log(props);
  return (
    <div id="signup">
      <p>Sign up:</p>
      <form id="signupForm" onSubmit={(event) => props.newUser(event)}>
        <div className="signupFormRow">
          <label> First Name: </label>
          <input placeholder="first" type="input" id="email" />
        </div>
        <br />
        <div className="signupFormRow">
          <label> Last Name: </label>
          <input placeholder="last" type="input" id="email" />
        </div>
        <br />
        <div className="signupFormRow">
          <label> Email: </label>
          <input placeholder="email" type="input" id="email" />
        </div>
        <br />
        <div className="signupFormRow">
          <label> Password: </label>
          <input placeholder="pass" type="input" id="password" />
        </div>
        <br />
        <input id="signupSubmit" type="submit" value="create user name" />
      </form>
      <input id="backToLogin" type="button" value="back to login" onClick={() => props.publicPage('login')} />
    </div>

  );
};

export default Signup;
