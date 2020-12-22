import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/HomepageComponent';
import ShopPage from './pages/shop/ShopComponent';
import SingInAndSingUp from './pages/sing-in-and-sing-up/SingInAndSingUp';
import Checkout from './pages/checkout/Checkout';
import Header from './components/header/Header';


import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

import { checkUserSession } from './redux/user/user.actions';

import './App.css';


const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={Checkout} />

        <Route exact path='/singin' 
          render={() => currentUser ?
            (<Redirect to="/" />) :
            (<SingInAndSingUp />)
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
