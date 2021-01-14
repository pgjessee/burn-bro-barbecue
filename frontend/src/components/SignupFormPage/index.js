import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
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
      <div className="form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li className="errs" key={idx}>{error}</li>)}
          </ul>
          <div>
            <label>
              First Name
              <input
                type="text"
                value={first_name}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Zip
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;
