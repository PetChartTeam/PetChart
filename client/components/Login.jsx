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

//return content to render for the login page
const Login = (props) => {
  
  return (
    <div>
      {/* login form: */}
      <form id = "loginForm" onSubmit = { (event) => props.saveProfile(event)} >
        <label> Email: </label>
        <input type="input" id = "email"></input>
        <br></br>
        <label> password: </label>
        <input type="input" id = "password"></input>
        <br></br>
        <input type="submit" value="login"></input>
        <input type="button" value="Go to signup" onClick = { () => props.publicPage("signup")} ></input>
      </form>
      
    </div>
  )
}


export default Login;
