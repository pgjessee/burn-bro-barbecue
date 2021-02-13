import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link, NavLink } from 'react-router-dom';

import * as sessionActions from '../../store/session';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);


    if (sessionUser) return (
      <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({credential, password})).catch((res) => {
            if (res.data && res.data.errors) setErrors(res.data.errors);

        });
    }

    return (
      <div className="page-container">
        <div className="logo-div">
          <Link exact to="/"><img className="homepage-logo" src="/logos/burnbro-logo.png"/></Link>
        </div>
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
          <div><h1>Welcome, back!</h1></div>
          <div className="errs-container">
            <ul>
              {errors.map((error, idx) => <li className="errs" key={idx}>{error}</li>)}
            </ul>
          </div>
            <div>
                <input
                  className="auth-form-inputs"
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  placeholder="Email"
                  required
                />
            </div>
            <div>
              <input
                className="auth-form-inputs"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <div className="login-form-submit-button-div">
              <button className="login-form-submit-button" type="submit">Log In</button>
            </div>
          </form>
        </div>
        <div className="return-home-button">
            <NavLink exact to="/"><button className="navigation-button">Return Home</button></NavLink>
        </div>
      </div>

      );
};


export default LoginFormPage;
