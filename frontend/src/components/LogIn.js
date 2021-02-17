import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="container">
            <div className="create">
                <form action="">
                <h1>Log In</h1>
        
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required></input>
                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pasword" required></input>
                <br/>
                <button type="button" class="btn btn-success btn-lg btn-block">LogIn</button>
                </form>
            </div>
      </div>
    )
  }
}

export default Login;