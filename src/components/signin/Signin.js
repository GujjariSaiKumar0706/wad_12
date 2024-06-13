import React from "react";
import './Signin.css';

function Signin() {
    return (
        <div className="signin-container">
            <h1 className="signin-title">Login</h1>
            <form className="signin-form">
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

export default Signin;
