import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/HomepageComponent';
import ShopPage from './pages/shop/ShopComponent';
import SingInAndSingUp from './pages/sing-in-and-sing-up/SingInAndSingUp';
import Checkout from './pages/checkout/Checkout';


import Header from './components/header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {     
          setCurrentUser({ 
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else setCurrentUser(userAuth);
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />

          <Route exact path='/singin' 
            render={() => this.props.currentUser ?
              (<Redirect to="/" />) :
              (<SingInAndSingUp />)
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
