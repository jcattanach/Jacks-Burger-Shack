import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Ingredients from './components/Ingredients'
import { Top, Bottom, Patty, Cheese, Lettuce, Tomato, Pickle } from './components/Burger'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Ingredients />
        <div className="burgerContainer">
          <Top />
          <Pickle />
          <Lettuce />
          <Tomato />
          <Cheese />
          <Patty />
          <Bottom/>
        </div>
      </div>
    );
  }
}

export default App;
