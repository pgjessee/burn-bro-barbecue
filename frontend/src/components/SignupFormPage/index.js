import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
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
    <div className="page-container">
      <div className="logo-div"><Link exact to="/"><img className="homepage-logo" src="/logos/burnbro-logo.png"/></Link></div>
      <div className="form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>Sign Up for Rewards!</div>
          <ul>
            {errors.map((error, idx) => <li className="errs" key={idx}>{error}</li>)}
          </ul>
          <div className="input-container">
            <div>
            <label>
              First Name:
            </label>
            </div>
            <div>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            </div>
          </div>
          <div className="input-container">
            <div>
            <label>
              Email:
            </label>
            </div>
            <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
          </div>
          <div className="input-container">
            <label>
              Zip:
            </label>
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Confirm Password:
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="submit-button">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;
