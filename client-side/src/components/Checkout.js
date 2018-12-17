import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Checkout.css'
import Stripe from './Stripe'

class Checkout extends Component {
  render() {

    let burgerOrder = this.props.crt.map((ingredients) => {
      return ingredients.items.map((item,index) => {
        return <li key={index}>{item}</li>
      })
    })

    let taxedTotal = this.props.tot * 1.08

    return (
      <div className="Checkout">
        <h1>Checkout</h1>
        <h2> Total = ${taxedTotal.toFixed(2)} (with tax)</h2>
        <h2> Items in Cart = {this.props.item}</h2>
        <Stripe />
        <div>
          <h3>Order Info</h3>
          {burgerOrder}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tot: state.cartTotal,
    item: state.itemsInCart,
    crt: state.cart
  }
}

export default connect(mapStateToProps)(Checkout);
