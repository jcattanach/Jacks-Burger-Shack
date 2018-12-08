import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Menu from './components/Menu'
import { Top, Bottom, Patty, Cheese, Lettuce, Tomato, Pickle, Ketchup, Mustard } from './components/Burger'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="burgerContainer">
          <div className="ingredientMenu">
            <h4>Ingredients</h4>
            <button onClick={this.props.toggleLettuce}>Lettuce</button>
            <button onClick={this.props.toggleTomato}>Tomato</button>
            <button onClick={this.props.togglePickles}>Pickles</button>
            <button onClick={this.props.toggleKetchup}>Ketchup</button>
            <button onClick={this.props.toggleMustard}>Mustard</button>
            <button onClick={this.props.toggleCheese}>Cheese $.50</button>
            <button onClick={this.props.toggleExtraCheese}>Extra Cheese $.50</button>
            <button onClick={this.props.toggleDoubleMeat}>Double Meat - $2</button>
          </div>
          <Top />
          <Mustard value={this.props.mus}/>
          <Pickle value={this.props.pic}/>
          <Lettuce value={this.props.let}/>
          <Tomato value={this.props.tom}/>
          <Cheese value={this.props.chee} valueTwo={this.props.ext}/>
          <Patty value={this.props.dub}/>
          <Ketchup value={this.props.ket}/>
          <Bottom/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    let: state.lettuce,
    tom: state.tomato,
    pic: state.pickles,
    chee: state.cheese,
    dub: state.doubleMeat,
    ext: state.extraCheese,
    ket: state.ketchup,
    mus: state.mustard
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    toggleLettuce : () => dispatch({ type : "TOGGLE_LETTUCE"}),
    toggleTomato : () => dispatch({ type : "TOGGLE_TOMATO"}),
    toggleCheese : () => dispatch({ type : "TOGGLE_CHEESE"}),
    togglePickles : () => dispatch({ type : "TOGGLE_PICKLES"}),
    toggleExtraCheese : () => dispatch({ type : "TOGGLE_EXTRA_CHEESE"}),
    toggleDoubleMeat : () => dispatch({ type : "TOGGLE_DOUBLE_MEAT"}),
    toggleMustard : () => dispatch({ type : "TOGGLE_MUSTARD"}),
    toggleKetchup : () => dispatch({ type : "TOGGLE_KETCHUP"})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
