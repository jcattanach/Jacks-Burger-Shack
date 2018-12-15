import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Price.css'

class Price extends Component {
  render() {
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

let price = <div className = "priceDiv"><h2>Cost </h2><p> ${cost.toFixed(2)} </p><button onClick={() => this.props.buttonAddToCart(cost)}>Add To Cart</button></div>

    return (
      <div>
        {price}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chee: state.cheese,
    dub: state.doubleMeat,
    ext: state.extraCheese,
    bac: state.bacon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonAddToCart : (cost) => dispatch({ type : "ADD_TO_CART", value : cost})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Price)
