import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomepageComponent';
import ShopPage from './pages/shop/ShopComponent';
import SingInAndSingUp from './pages/sing-in-and-sing-up/SingInAndSingUp';

import Header from './components/header/Header';

import { auth } from './firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/singin' component={SingInAndSingUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
