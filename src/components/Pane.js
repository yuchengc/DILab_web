import React, { Component } from 'react';
import "./Header.css";

export default class Pane extends Component{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}