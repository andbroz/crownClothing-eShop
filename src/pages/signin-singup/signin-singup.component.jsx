import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-singup.styles.scss';

const SignInAndSignUpPage = props => (
  <div className='signin_signup'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
