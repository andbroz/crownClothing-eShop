import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripeInCents = price * 100;
  const publishableKey =
    'pk_test_51HlhshDKFfUB7Zlqs53EJ7iCv27nHZdIf6zy8gFk7ygvq4HES6rCKDbl4tVIHfWUzv14ePVSz3wdqygcFT2WDLTC00zTR1NCZR';

  const onToken = token => {
    console.log(token);
    alert('Demo Paymant Successfull');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing sp. z o.o.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripeInCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
