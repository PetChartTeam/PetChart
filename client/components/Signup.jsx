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


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: null,
      img: null,
    }
    this.handleClick = this.handleClick.bind(this);
    // this.uploadImg = this.uploadImg.bind(this);

  }

  handleClick (e) {
    this.setState({role: e.currentTarget.value})
  }

  // uploadImg (e) {
  //   let imageFormObj = new FormData();
  //   imageFormObj.append("imageData", e.target.files[0]);
  //   console.log("E TARGET FILES", e.target.files[0])
  //   this.setState({img: URL.createObjectURL(e.target.files[0])});

  //   console.log("SETSTATE", this.state.img);
  //   console.log("IMAGEFORMOBJ", imageFormObj);

  //   fetch('/uploadImg/', {
  //     headers: { "Content-Type": "multipart/form-data" },
  //     method: 'POST',
  //     body: imageFormObj
  //   }).then(res => console.log(res));
  // }

  render () {
    if (this.state.role === 'Vet') {
      return (
      <div>
        Signup Form:<br />
        <img src={this.state.img} />
        <form id = "signupForm" onSubmit = { (event) => this.props.newUser(event)}>
          <label><input type="radio" onChange={(e) => this.handleClick(e)} required name="role" value="Owner" />Owner</label>
          <label><input type="radio" onChange={(e) => this.handleClick(e)} required name="role" value="Vet" />Vet</label>
          <br />
          <label> First Name: </label>
          <input type="input" required id = "firstName"></input>
          <br></br>
          <label> Last Name: </label>
          <input type="input" required id = "lastName"></input>
          <br></br>
          <label> Vet Practice: </label>
          <input type="input" required id = "vetPractice"></input>
          <br></br>
          <label> Email: </label>
          <input type="input" required id = "email"></input>
          <br></br>
          <label> Password: </label>
          <input type="password" required id = "password"></input>
          <br></br>
          <input type="submit" value="Create User Name"></input>
        </form>
        <input type="button" value="Back to Login" onClick = { () => this.props.publicPage("login")} ></input>
      </div>
    )
  }
  else {
    return (
      <div>
        <form action="/uploadImg" method="post" encType="multipart/form-data">
          <input type="file" name="avatar" />
          <input type="submit"  name="LOAD" />
        </form>
        Signup Form:<br />
        <form id = "signupForm" onSubmit = { (event) => this.props.newUser(event)}>
          <label><input type="radio" onChange={(e) => this.handleClick(e)} required name="role" value="Owner" />Owner</label>
          <label><input type="radio" onChange={(e) => this.handleClick(e)} required name="role" value="Vet" />Vet</label>
          <br />
          <label> First Name: </label>
          <input type="input" required id = "firstName"></input>
          <br></br>
          <label> Last Name: </label>
          <input type="input" required id = "lastName"></input>
          <br></br>
          <label> Email: </label>
          <input type="input" required id = "email"></input>
          <br></br>
          <label> Password: </label>
          <input type="password" required id = "password"></input>
          <br></br>
          <input type="submit" value="Create User Name"></input>
        </form>
        <input type="button" value="Back to Login" onClick = { () => this.props.publicPage("login")} ></input>
      </div>
    )}
  }
}

export default Signup;