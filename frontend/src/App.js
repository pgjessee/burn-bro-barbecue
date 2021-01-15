import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import ReviewsPage from './components/ReviewsPage'
import OrderFormPage from './components/OrderFormPage'
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';

function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route  exact path="/">
            <Navigation isLoaded={isLoaded}/>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/new-order">
            <OrderFormPage />
          </Route>
          <Route path="/reviews">
            <ReviewsPage />
          </Route>
        </Switch>
      )}
    </>
  );

}

export default App;
