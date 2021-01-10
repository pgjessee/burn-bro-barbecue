import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';




function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
          <button><NavLink to="/login">Log In</NavLink></button>
          <button><NavLink to="/signup">Sign Up</NavLink></button>
        </>
      );
    }

    return (
      <ul>
        <li>
          {/* <NavLink exact to="/">Home</NavLink> */}
          {isLoaded && sessionLinks}
        </li>
      </ul>
    );
}

export default Navigation;
