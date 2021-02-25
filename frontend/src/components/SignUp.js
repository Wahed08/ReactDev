import React, { Component } from 'react'
import '../components/Signup.css';
import axios from 'axios';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state={
            name: '',
            username: '',
            department: '',
            email: '',
            password: '',
            confirm_password: ''
        };
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

      handleNameChange = (event) => {

        this.setState({
            name : event.target.value
        })
      }
      handleUsernameChange = (event) => {

        this.setState({
            username : event.target.value
        })
      }
      handleDepartmentChange = (event) => {

        this.setState({
            department : event.target.value
        })
      }
      handleEmailChange = (event) => {

        this.setState({
            email : event.target.value
        })
      }
      handlePassChange = (event) => {

        this.setState({
            password : event.target.value
        })
      }
      handlePass2Change = (event) =>{

        this.setState({
            confirm_password : event.target.value
        })
    }
     

     handeleSubmit(){
        //event.preventDefault();
         ///const {name, username, department, email, password, confirm_password} = this.state;
        
         axios.post('http://localhost:4000/add',this.state)
        .then(res=>
          console.log(res))
        .catch(err=>
          console.log(err))
        // fetch('http://localhost:5000/post/add',{
        //     method: "POST",
        //     headers: {"Content-Type": "application/json" },
        //     body: JSON.stringify(this.state)
        // }).then((res)=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log(err)
        // })
        }
    
       
        render(){
        return (
            // <div className="container">
                <div className="create">
                <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>

                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" value={this.state.name} required onChange={this.handleNameChange}></input>

                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" value={this.state.username} required onChange={this.handleUsernameChange}></input>

                <label for="department"><b>Department</b></label>
                <input type="text" placeholder="Enter Department" name="department" value={this.state.department} required onChange={this.handleDepartmentChange}></input>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={this.state.email} required onChange={this.handleEmailChange}></input>

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={this.state.password} required onChange={this.handlePassChange}></input>

                <label for="condirm-password"><b>Confirm Pasword</b></label>
                <input type="password" placeholder="Enter Confirm Password" name="confirm_password" value={this.state.confirm_password} required onChange={this.handlePass2Change}></input>

                {/* <button type="button" className="btn btn-success btn-lg btn-block" value="submit">Submit</button> */}
                <input type="submit" value="Submit" />
                </form>
                </div>
            //</div>

    )

   }
}


export default SignUp;
