import React, { Component } from 'react'
import '../components/Signup.css';

class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <div className="create">
                <form action="">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>

                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required></input>
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required></input>
                <label for="department"><b>Department</b></label>
                <input type="text" placeholder="Enter Department" name="department" required></input>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required></input>
                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pasword" required></input>
                <label for="condirm-password"><b>Confirm Pasword</b></label>
                <input type="password" placeholder="Enter Confirm Password" name="confirm-password" required></input>

                <button type="button" class="btn btn-success btn-lg btn-block">Submit</button>
                <button type="button" class="btn btn-danger btn-lg btn-block">Cancel</button>
                </form>
                </div>
            </div>

        )
    }
}

export default SignUp;
