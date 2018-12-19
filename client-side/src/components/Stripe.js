import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'


class Stripe extends Component {
  onToken = (token) => {
    fetch('http://localhost:3001/save-stripe-token', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ token: token.id, amount: this.props.value, cart: this.props.valueTwo, email: token.email}),
    }).then(response => {

      response.json().then(data => {
        if(data.message == 'order is placed'){
          alert(`Your ${data.message} under ${data.email}!`)
          this.props.emptyCart()
        } else {
          alert('There was an error processing your order. Please try again')
        }
      })
    })
  }

  render() {

    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_B941Lk8uujRSJCsGSndEwkBI"
        amount={this.props.value}
        cart={this.props.valueTwo}
        currency="USD"
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart : () => dispatch({ type : "EMPTY_CART"})
  }
}
export default connect(null,mapDispatchToProps) (Stripe);
