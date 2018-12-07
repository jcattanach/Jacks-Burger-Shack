import React, { Component } from 'react';
import { connect } from 'react-redux'

class Ingredients extends Component {

  toggleTomato = () => {
    console.log('Tomato')
  }
  toggleCheese = () => {
    console.log('Cheese')
  }
  togglePickles = () => {
    console.log('Pickles')
  }


  render() {
    return (
      <div>
        <button onClick={this.props.toggleLettuce}>Lettuce</button>
        <button onClick={this.props.toggleTomato}>Tomato</button>
        <button onClick={this.props.toggleCheese}>Cheese</button>
        <button onClick={this.props.togglePickles}>Pickles</button>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {
//
// }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLettuce : () => dispatch({ type : "TOGGLE_LETTUCE"}),
    toggleTomato : () => dispatch({ type : "TOGGLE_TOMATO"}),
    toggleCheese : () => dispatch({ type : "TOGGLE_CHEESE"}),
    togglePickles : () => dispatch({ type : "TOGGLE_PICKLES"})

  }
}
export default connect(null, mapDispatchToProps)(Ingredients)
