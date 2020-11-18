import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/HomepageComponent';
import ShopPage from './pages/shop/ShopComponent';
import SingInAndSingUp from './pages/sing-in-and-sing-up/SingInAndSingUp';

import Header from './components/header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log('user auth if block')
        userRef.onSnapshot(snapShot => {
          console.log(snapShot)
          
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
          <Route path='/singin' component={SingInAndSingUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);
