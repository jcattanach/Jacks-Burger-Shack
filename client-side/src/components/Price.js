import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Price.css'

class Price extends Component {
  render() {

    const order = {
      name: 'Order',
      items: []
    }

    if(this.props.dub){
      order.items.push('double meat')
    }
    if(this.props.bac){
      order.items.push('bacon')
    }
    if(this.props.let){
      order.items.push('lettuce')
    }
    if(this.props.tom){
      order.items.push('tomato')
    }
    if(this.props.chee){
      order.items.push('cheese')
    }
    if(this.props.ext){
      order.items.push('extra cheese')
    }
    if(this.props.pic){
      order.items.push('pickles')
    }
    if(this.props.mus){
      order.items.push('mustard')
    }
    if(this.props.ket){
      order.items.push('ketchup')
    }

    let cost = 5.00
    if(this.props.bac){
      cost += 1.00
    }
    if(this.props.chee){
      cost += 0.50
    }
    if(this.props.dub){
      cost += 2.00
    }
    if(this.props.ext){
      cost += 0.50
    }

    console.log(order.items)

let price = <div className = "priceDiv"><h2>Cost </h2><p> ${cost.toFixed(2)} </p><button onClick={() => this.props.buttonAddToCart(cost,order)}>Add To Cart</button></div>

    return (
      <div>
        {price}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    let: state.lettuce,
    tom: state.tomato,
    pic: state.pickles,
    chee: state.cheese,
    dub: state.doubleMeat,
    ext: state.extraCheese,
    ket: state.ketchup,
    mus: state.mustard,
    bac: state.bacon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonAddToCart : (cost,order) => dispatch({ type : "ADD_TO_CART", value : cost, order: order})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Price)
