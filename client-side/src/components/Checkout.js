import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Checkout.css'
import Stripe from './Stripe'
import Order from './Order'

class Checkout extends Component {
  render() {

    let taxedTotal = this.props.tot * 1.08

    if(this.props.crt.length === 0){
      taxedTotal = 0
    }

    let cents = taxedTotal * 100

    return (
      <div className="Checkout">
        <h1>Checkout</h1>
        <h2> Total = ${taxedTotal.toFixed(2)} (with tax)</h2>
        <h2> Items in Cart = {this.props.crt.length}</h2>
        <Stripe value={cents} valueTwo={this.props.crt}/>
        <div>
          <h3>Order Info</h3>
          <Order />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tot: state.cartTotal,
    crt: state.cart
  }
}

export default connect(mapStateToProps)(Checkout);
