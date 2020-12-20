import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import './sing-in.styles.scss';


class SingIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }
  render() {
    const { googleSignInStart } = this.props;
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
   dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SingIn);