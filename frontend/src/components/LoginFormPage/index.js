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
        <div className="form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => <li className="errs" key={idx}>{error}</li>)}
            </ul>
            <div>
              <label className="login-label">
                Email
                <input
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
            <label className="login-label">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="return-home-button">
            <NavLink exact to="/"><button className="navigation-button">Return Home</button></NavLink>
        </div>
      </div>

      );
};


export default LoginFormPage;
