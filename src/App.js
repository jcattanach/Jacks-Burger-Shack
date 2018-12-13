import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Top, Bottom, Patty, Cheese, Lettuce, Tomato, Pickle, Ketchup, Mustard, Bacon } from './components/Burger'
import Price from './components/Price'


class App extends Component {
  render() {

    let extraCheeseButton = null
    if(this.props.chee){
      extraCheeseButton = <button onClick={this.props.toggleExtraCheese}>Extra Cheese $.50</button>
    }



    return (
      <div className="App">
        <Price/>
        <div className="ingredientMenu">
          <h4><u>Ingredients</u></h4>
          <div>
            <button onClick={this.props.toggleLettuce}>Lettuce</button>
            <button onClick={this.props.toggleTomato}>Tomato</button>
            <button onClick={this.props.togglePickles}>Pickles</button>
            <button onClick={this.props.toggleKetchup}>Ketchup</button>
            <button onClick={this.props.toggleMustard}>Mustard</button>
          </div>
          <div className="addOnIngredients">
          <h4><u>Add-Ons</u></h4>
            <button onClick={this.props.toggleCheese}>Cheese $.50</button>
            {extraCheeseButton}
            <button onClick={this.props.toggleBacon}>Bacon $1</button>
            <button onClick={this.props.toggleDoubleMeat}>Double Meat $2</button>
          </div>
        </div>
        <div className="burgerContainer">
          <Top />
          <Mustard value={this.props.mus}/>
          <Pickle value={this.props.pic}/>
          <Lettuce value={this.props.let}/>
          <Tomato value={this.props.tom}/>
          <Cheese value={this.props.chee} valueTwo={this.props.ext}/>
          <Bacon value={this.props.bac}/>
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
    mus: state.mustard,
    bac: state.bacon
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
    toggleKetchup : () => dispatch({ type : "TOGGLE_KETCHUP"}),
    toggleBacon : () => dispatch({ type : "TOGGLE_BACON"})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
