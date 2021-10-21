import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Jn4N8EAg20OupD0yLQB63AI0Pqjy4dXjK7DCBYWtzAJjheCBAdFRHQ2OPmpGEAuLzjMCDHbx7ybItgr8Wm12uSP00xenFeFuf';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
