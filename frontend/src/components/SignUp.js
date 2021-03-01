import React, { Component } from 'react'
import '../components/Signup.css';

class SignUp extends Component {

    constructor(){
        super();
        this.state={
            name: '',
            username: '',
            department: '',
            email: '',
            password: '',
            confirm_password: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handlePass2Change = this.handlePass2Change.bind(this);
    }

      handleNameChange(event){

        this.setState({
            name : event.target.value
        })
      }
      handleUsernameChange(event){

        this.setState({
            username : event.target.value
        })
      }
      handleDepartmentChange(event){

        this.setState({
            department : event.target.value
        })
      }
      handleEmailChange(event){

        this.setState({
            email : event.target.value
        })
      }
      handlePassChange(event){

        this.setState({
            password : event.target.value
        })
      }
      handlePass2Change(event){

        this.setState({
            confirm_password : event.target.value
        })
    }

        handleSubmit = (e) =>{
        e.preventDefault();
        const post = {
                name : this.state.name,
                username: this.state.username,
                department: this.state.department,
                email: this.state.email,
                password: this.state.password,
                confirm_password: this.state.confirm_password
          }

            fetch('http://localhost:5000/post/signup',{
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(post)
            }).then((res)=>{
               console.log(res)
            }).catch(err=>{
              console.log(err);
            })

            window.location = 'http://localhost:3000/login';
 }
              
        render(){
        return (
             <div className="container">
                <div className="create">
                <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>

                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.handleNameChange}></input>

                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleUsernameChange} ></input>

                <label for="department"><b>Department</b></label>
                <input type="text" placeholder="Enter Department" value={this.state.department} onChange={this.handleDepartmentChange}></input>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" value={this.state.email} onChange={this.handleEmailChange}></input>

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePassChange} ></input>

                <label for="condirm-password"><b>Confirm Pasword</b></label>
                <input type="password" placeholder="Enter Confirm Password" value={this.state.confirm_password} onChange={this.handlePass2Change} ></input>

                <input type="submit" class="input" value="Submit" />
                </form>
                </div>
            </div>

    )

   }
}


export default SignUp;
