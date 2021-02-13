import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";

import './SignupForm.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [first_name, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ first_name, email, zip, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signup-page-container">
      <div className="logo-div"><Link exact to="/"><img className="homepage-logo" src="/logos/burnbro-logo.png"/></Link></div>
      <div className="form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>Sign Up for Rewards!</div>
          <ul>
            {errors.map((error, idx) => <li className="errs" key={idx}>{error}</li>)}
          </ul>
          <div className="input-container">
            <div>
            <input
              className="auth-form-inputs"
              type="text"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
              required
            />
            </div>
          </div>
          <div className="input-container">
            <div>
            <input
              className="auth-form-inputs"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            </div>
          </div>
          <div className="input-container">
            <input
              className="auth-form-inputs"
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Zip Code"
              required
            />
          </div>
          <div className="input-container">
            <input
              className="auth-form-inputs"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="input-container">
            <input
              className="auth-form-inputs"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="submit-button-form-div">
            <button className="signup-form-submit-button" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      <div className="return-home-button">
            <NavLink exact to="/"><button className="navigation-button">Return Home</button></NavLink>
      </div>
    </div>
  );
}

export default SignupFormPage;
