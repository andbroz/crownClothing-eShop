import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ isGoogleSignIn, children, inverted, ...restProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...restProps}
  >
    {children}
  </button>
);

export default CustomButton;
