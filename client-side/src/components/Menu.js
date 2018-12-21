import React, { Component } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'


class Menu extends Component {
  render() {

    let cart = <img className="cartIcon" src={require('./imgs/shopping-cart2.png')} />

    if(this.props.crt.length >= 1){
      cart = <img className="cartIcon" src={require('./imgs/shopping-cart-full2.png')} />
    }

    return (
        <div className="Menu">
            <ul className="navBar">
              <li><Link to = "/"><img className="logo" src={require('./imgs/logo-2.png')} /></Link></li>
              <li><Link to = "/build-burger"><div className="navMenuItem" >Build your Burger</div></Link></li>
              <li><Link to = "/checkout">{cart}</Link></li>
            </ul>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    crt: state.cart
  }
}

export default connect(mapStateToProps)(Menu);
