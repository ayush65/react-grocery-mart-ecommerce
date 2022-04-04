import React from 'react'
import { Link } from "react-router-dom";
import { Navbar } from '../Homepage-components';
import './Signup.css'

function Signup() {
  return (
      
    <div className="signup-container">
        <Navbar />
        <div className="signup-page-component">
            <h1>Sign Up</h1>
            <div className="">
              <label htmlFor="Username" className="form-text">
                Email:*
              </label>
              <input
                className="input-box basic"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="">
              <label htmlFor="Username" className="form-text">
                Username:*
              </label>
              <input
                className="input-box basic"
                type="text"
                placeholder="Enter a Username"
              />
            </div>
            <div className="">
              <label htmlFor="password" className="form-text">
                Password:*
              </label>
              <input
                className="input-box basic"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="">
              <input type="checkbox" name="Remember-Me" value="Unselected" />
              <label className="form-text" htmlFor="Remember-Me">Remember me</label>
            </div>
            <div className="">
              <button className="form-button">
                <Link className="form-button" to="/products">
                  Sign Up
                </Link>
              </button>
              <Link to="/signin">
                <span className="form-button">Already have an Account?</span>
              </Link>
            </div>
            </div>
    </div>
  )
}

export default Signup