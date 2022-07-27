/** @format */

import React from "react";
import { Navbar } from "../Homepage-components";
import "./SignIn.css";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { userState, userDispatch, loginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Navbar />

      <div className='login-page-component'>
        <h1 className='landing-page-heading'>Login</h1>
        <div className='input'>
          <input
            className='input-box basic'
            type='email'
            placeholder='Enter Your Email'
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className='input input-margin'>
          <input
            className='input-box basic'
            type='password'
            placeholder='Enter Your Password'
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        {userState.passwordCheck && (
          <span className=''>
            Please check the credentials entered and try again
          </span>
        )}
        {userState.userNotFound && (
          <span className=''>*User not found. click on signup for free</span>
        )}
      </div>

      <div className='Signin-container'>
        <div>
          <div>
            <input type='checkbox' name='Remember-Me' value='Unselected' />
            <label className='form-text' htmlFor='Remember-Me'>
              Remember me
            </label>
          </div>
        </div>
        <div className=''>
          <button className='form-button'>
            <span
              className=''
              onClick={() => {
                userDispatch({
                  type: "UPDATE_USER_DATA",
                  payload: {
                    email: formData.email,
                    password: formData.password,
                  },
                });
                loginUser(formData.email, formData.password);
              }}>
              Sign In
            </span>
          </button>
          <button className='form-button'>
            <span
              className=''
              onClick={() => {
                userDispatch({
                  type: "UPDATE_USER_DATA",
                  payload: {
                    email: "adarshbalika@gmail.com",
                    password: "adarshbalika",
                  },
                });
                loginUser("adarshbalika@gmail.com", "adarshbalika");
              }}>
              Sign In with test credentials
            </span>
          </button>
        </div>
        <p className='form-text'>
          Don't have an account?
          <Link to='/signup'>
            <span className='form-text'>Sign up for free</span>
          </Link>
        </p>
      </div>
      <img className='img-landing' src='https://i.gifer.com/9Aug.gif' alt='' />
    </>
  );
};

export { SignIn };
