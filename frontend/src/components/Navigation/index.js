import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserPage from '../UserPage'
import ProfileButton from './ProfileButton';
import SplashPage from '../SplashPage'
import './Navigation.css';




function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <UserPage user={sessionUser}/>
      );
    } else {
      sessionLinks = (
        <SplashPage />
      );
    }

    return (
      <>
        <Link exact to="/"><img className="homepage-logo" src="/logos/burnbro-logo.png"/></Link>
        {isLoaded && sessionLinks}
      </>
    );
}

export default Navigation;
