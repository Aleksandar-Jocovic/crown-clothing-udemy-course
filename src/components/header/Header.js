import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ currentUser, hidden}) => ( 
  <div className="header">
    <Link classname="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {
        currentUser ?  
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/singin">SING IN</Link>
      }
      <CartIcon />
    </div>
    { hidden ? null : <CartDropdown />}
  </div>
)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser, //  (currentUser: currentUser) a je isto kao a: a
  hidden
})

export default connect(mapStateToProps)(Header);
