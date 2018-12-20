import React, { Component } from 'react';
import Menu from './Menu'

export class BaseLayout extends Component {

  render() {
    return (
      <div class="BorderOrange">
        <Menu />
        {this.props.children}
      </div>
    )
  }

}
