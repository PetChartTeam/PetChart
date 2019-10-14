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


const Signup = () => (
  <div>
    signup form:
    <form id = "loginForm" onSubmit = { (event) => props.saveProfile(event)}>
      <label> First Name: </label>
      <input type="input" id = "email"></input>
      <br></br>
      <label> Last Name: </label>
      <input type="input" id = "email"></input>
      <br></br>
      <label> Email: </label>
      <input type="input" id = "email"></input>
      <br></br>
      <label> password: </label>
      <input type="input" id = "password"></input>
      <br></br>
      <input type="submit" value="create user name"></input>
    </form>
    <input type="button" value="back to login" onClick = { () => props.publicPage("login")} ></input>
  </div>
)

export default Signup;