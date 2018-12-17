import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Stripe extends Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
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
      />
    )
  }
}

export default Stripe;
