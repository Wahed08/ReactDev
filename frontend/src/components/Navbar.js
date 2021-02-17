import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="container">
             <div className="pos-f-t">
              <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
              <h4 className="text-white">YoYo</h4>
              <span className="text-muted">Hi,Buddy This is an Registration Form</span>
             </div>
             </div>
             <nav className="navbar navbar-dark bg-dark">
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
               <Link to="/"><span className="navbar-toggler-icon"></span></Link>
               </button>
                 <div className="btn-group">
                    <Link to="/signup" type="button" className="btn btn-secondary mr-1">Sign Up</Link>
                    <Link to="/login" type="button" className="btn btn-secondary">Log In</Link>
                </div>
            </nav>
            <br/><br/>
           </div>
         </div>
        )
    }
}

export default Navbar;
