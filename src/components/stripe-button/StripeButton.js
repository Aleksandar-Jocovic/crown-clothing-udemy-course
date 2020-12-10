import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HwKI6BD5oRAGqa5KG3HmjjyAmy4QujGSvD2W4EkIQXHXTEL4EAsKJNybMzQMEoKRaygStrXJ9LPRjMqAm04KNDh00wJntdttx';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }


  return (
    <StripeCheckout
      label='Pay Now'
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export  default StripeCheckoutButton;