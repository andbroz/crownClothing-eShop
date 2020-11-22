import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...restProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...restProps} />
  );
};

export default WithSpinner;
