import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Checkout.css'

class Checkout extends Component {
  render() {

    let burgerOrder = this.props.crt.map(function(ingredients,index){
      return <li key={index}>{ingredients}</li>
    })

    let taxedTotal = this.props.tot * 1.08

    return (
      <div className="Checkout">
        <h1>Checkout</h1>
        <h2> Total = ${taxedTotal.toFixed(2)} (with tax)</h2>
        <h2> Items in Cart = {this.props.item}</h2>
        <ul>{burgerOrder}</ul>
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
