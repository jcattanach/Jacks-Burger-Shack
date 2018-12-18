import React, { Component } from 'react';
import { connect } from 'react-redux'

class Order extends Component {
  render() {

    let burgerOrder = this.props.crt.map((order, index) => {

      let result = <div><h4>{order.name}</h4></div>
      let items = order.items.map((item, index) => {
        return <li key={index + 100}>{item}</li>
      })


      return <li key={index}>
        {result}
        <ul>
        {items}
        </ul>
        <button onClick={() => this.props.buttonDeleteItem(order.id, order.price)}>Remove Item</button>
      </li>
    })

    return (
      <div className="Order">
        {burgerOrder}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    crt: state.cart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    buttonDeleteItem : (id, price) => dispatch({ type : "REMOVE_FROM_CART", value : id, price: price})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);