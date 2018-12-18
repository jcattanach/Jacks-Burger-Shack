import React, { Component } from 'react';
import './Burger.css'

export class Top extends Component {
  render() {
    return (
      <div>
        <div className="bun top"></div>
      </div>
    );
  }
}

export class Bottom extends Component {
  render() {
    return (
      <div>
        <div className="bun bottom"></div>
      </div>
    );
  }
}

export class Patty extends Component {
  render() {
    let patty = null
    if(this.props.value){
      patty = <div className="patty"></div>

}
    return (
      <div>
        {patty}
        <div className="patty"></div>
      </div>
    );
  }
}

export class Cheese extends Component {
  render() {
    let cheese = null
    if(this.props.value){
      cheese = <div className="cheese"></div>
}
    let extCheese
    if(this.props.valueTwo){
      extCheese = <div className="cheese"></div>
    }
    return (
      <div>
        {extCheese}
        {cheese}
      </div>
    );
  }
}

export class Lettuce extends Component {
  render() {

    let lettuce = null
    if(this.props.value){
      lettuce = <div className="lettuce"></div>

}
    return (
      <div>
        {lettuce}
      </div>
    );
  }
}

export class Tomato extends Component {
  render() {
    let tomato = null
    if(this.props.value){
      tomato = <div className="tomato"></div>

}
    return (
      <div>
        {tomato}
      </div>
    );
  }
}

export class Pickle extends Component {
  render() {
    let pickle = null
    if(this.props.value){
      pickle = <div className="pickle"></div>

}
    return (
      <div>
        {pickle}
      </div>
    );
  }
}

export class Ketchup extends Component {
  render() {
    let ketchup = null
    if(this.props.value){
      ketchup = <div className="ketchup"></div>

}
    return (
      <div>
        {ketchup}
      </div>
    );
  }
}

export class Mustard extends Component {
  render() {
    let mustard = null
    if(this.props.value){
      mustard = <div className="mustard"></div>

}
    return (
      <div>
        {mustard}
      </div>
    );
  }
}
export class Bacon extends Component {
  render() {
    let bacon = null
    if(this.props.value){
      bacon = <div className="bacon"></div>

}
    return (
      <div>
        {bacon}
      </div>
    );
  }
}
