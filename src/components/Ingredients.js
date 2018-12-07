import React, { Component } from 'react';


export class Ingredients extends Component {

  toggleLettuce = () => {
    console.log('Lettuce')
  }
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
        <button onClick={this.toggleLettuce}>Lettuce</button>
        <button onClick={this.toggleTomato}>Tomato</button>
        <button onClick={this.toggleCheese}>Cheese</button>
        <button onClick={this.togglePickles}>Pickles</button>
      </div>
    );
  }
}
