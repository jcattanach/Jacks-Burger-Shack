import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Stripe extends Component {
  onToken = (token) => {
    fetch('http://localhost:3001/save-stripe-token', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ token: token.id, amount: this.props.value}),
    }).then(response => {

      response.json().then(data => {
        alert(data.message);
      });
    });
  }

  // ...

  render() {

    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_B941Lk8uujRSJCsGSndEwkBI"
        amount={this.props.value}
        currency="USD"
      />
    )
  }
}

export default Stripe;
