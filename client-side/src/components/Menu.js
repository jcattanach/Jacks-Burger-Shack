import React, { Component } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom'
import Media from "react-media";


class Menu extends Component {
  render() {
    return (
          <Media query="(max-width: 485px)">
            {matches =>
              matches ? (
            <div className="Menu2">
              <img className="logo" src={require('./imgs/logo-2.png')} />
                <div class="dropdown">
                  <button class="dropbtn" onSelect={() => null}>Menu</button>
                  <div class="dropdown-content">
                    <Link to = "/">Home</Link>
                    <Link to = "/build-burger">Build your Burger</Link>
                    <Link to = "/checkout">Checkout</Link>
                  </div>
                </div>
              </div>
              ) : (
            <div className="Menu">
              <img className="logo" src={require('./imgs/logo-2.png')} />
                <ul>
                  <li><Link to = "/">Home</Link></li>
                  <li><Link to = "/build-burger">Build your Burger</Link></li>
                  <li><Link to = "/checkout">Checkout</Link></li>
                </ul>
              </div>
              )
            }
          </Media>
    );
  }
}

export default Menu;
