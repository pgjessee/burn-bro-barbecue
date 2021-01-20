import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import ReviewsPage from './components/ReviewsPage'
import OrderFormPage from './components/OrderFormPage'
import ListPreviousOrders from './components/PreviousOrdersPage'
import CheckoutItems from './components/CheckoutPage'
import ListMenuEntrees from './components/MenuPage'
import WriteReview from './components/WriteReviewPage'
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';

function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
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
          <Route exact path="/new-order">
            <OrderFormPage />
          </Route>
          <Route exact path="/previous-orders">
            <ListPreviousOrders user={sessionUser}/>
          </Route>
          <Route path="/reviews">
            <ReviewsPage />
          </Route>
          <Route path="/write-review">
            <WriteReview user={sessionUser} />
          </Route>
          <Route path="/menu">
            <ListMenuEntrees />
          </Route>
          <Route path="/new-order/checkout">
            <CheckoutItems user={sessionUser}/>
          </Route>
        </Switch>
      )}
    </>
  );

}

export default App;
