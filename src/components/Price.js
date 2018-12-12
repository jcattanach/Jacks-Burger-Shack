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

let price = <div><h3>Cost </h3><p> ${cost.toFixed(2)} </p></div>

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

export default connect(mapStateToProps)(Price)
