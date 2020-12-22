import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import './sing-in.styles.scss';


const  SingIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: ''});

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value })
  }
  return(
    <div className="sing-in">
      <h2>I already have an account</h2>
      <span>Sing in with new email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput 
          type="text" 
          name="email" 
          value={email}
          handleChange={handleChange}
          label="Email" 
          required
        />
        <FormInput 
          type="text" 
          name="password" 
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sing In </CustomButton>
          <CustomButton 
            type='button'
            onClick={googleSignInStart} 
            isGoogleSignIn
          >Sing In With Google 
          </CustomButton>
        </div>

      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
   dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SingIn);