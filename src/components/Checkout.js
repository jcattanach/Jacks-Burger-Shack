import React, { Component } from 'react';
import { connect } from 'react-redux'

class Checkout extends Component {
  render() {

    let taxedTotal = this.props.tot * 1.08

    return (
      <div className="Checkout">
        <h1>Checkout</h1>
        <h2> Total = ${taxedTotal.toFixed(2)} (with tax)</h2>
        <h2> Items in Cart = {this.props.item}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tot: state.cartTotal,
    item: state.itemsInCart
  }
}

export default connect(mapStateToProps)(Checkout);
