import React from "react";
import './Signup.css';

function Signup() {
    return (
        <div className="signup-container text-center">
            <h1 className="signup-title">Register</h1>
            <form className="signup-form">
                <div className="form-group">
                    <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" id="mobilenumber" placeholder="Mobile Number" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Signup;
