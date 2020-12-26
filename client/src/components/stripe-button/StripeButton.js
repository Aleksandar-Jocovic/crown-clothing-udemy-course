import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HwKI6BD5oRAGqa5KG3HmjjyAmy4QujGSvD2W4EkIQXHXTEL4EAsKJNybMzQMEoKRaygStrXJ9LPRjMqAm04KNDh00wJntdttx';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('payment error', error);
      alert('There was an issue with your payment. Please make sure you are using provided credit card.');
    })
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