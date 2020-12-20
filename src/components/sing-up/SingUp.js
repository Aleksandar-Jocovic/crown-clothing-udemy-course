import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signUpStart } from '../../redux/user/user.actions'; 

import './sing-up.styles.scss';

class SingUp extends React.Component {
  constructor() {
    super ();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    signUpStart(displayName, email, password)

    if(password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    } 
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };


  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <div className="sing-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sing up with your email and password</span>
        <form action="" onSubmit={this.handleSubmit} className="sing-up-form">
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SING UP</CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password, confirmPassword) =>
   dispatch(signUpStart({displayName, email, password, confirmPassword}))
})

export default connect(null, mapDispatchToProps)(SingUp);