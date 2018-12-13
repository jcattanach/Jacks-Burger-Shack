import React, { Component } from 'react';
import { connect } from 'react-redux'

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

let price = <div><h3>Cost </h3><p> ${cost.toFixed(2)} </p><button onClick={this.props.buttonAddToCart}>Add To Cart</button></div>

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
    buttonAddToCart : () => dispatch({ type : "ADD_TO_CART", value : 5})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Price)
