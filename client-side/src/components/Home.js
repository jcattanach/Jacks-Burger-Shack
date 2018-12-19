import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to Jack's Burger Shack!</h1>
        <p>12345 Not Real St, FakePlace, USA, 55555</p>
        <p>555-555-1234</p>
        <img className="bigLogo" src={require('./imgs/logo-big.png')} />
        <h4>To get started click on the build your burger tab in the menu!</h4>
      </div>
    );
  }
}

export default Home;
