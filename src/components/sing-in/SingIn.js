import React from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { singInWithGoogle } from '../../firebase/firebase.utils'

import './sing-in.styles.scss';


class SingIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: ' '})
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }
  render() {
    return(
      <div className="sing-in">
        <h2>I already have an account</h2>
        <span>Sing in with new email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput 
            type="text" 
            name="email" 
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email" 
            required
          />
          <FormInput 
            type="text" 
            name="password" 
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sing In </CustomButton>
            <CustomButton 
              onClick={singInWithGoogle} 
              isGoogleSignIn
            >Sing In With Google 
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SingIn;