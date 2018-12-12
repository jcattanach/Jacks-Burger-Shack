import React, { Component } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/build-burger">Build your Burger</Link></li>
        <li><Link to = "/checkout">Checkout</Link></li>
      </div>
    );
  }
}

export default Menu;
