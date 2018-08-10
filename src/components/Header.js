import React, { Component } from 'react';
import "./Header.css";
import Tabs from './Tabs'
import Pane from './Pane'
// import Indicator from './Indicator'
import logo from '../images/logo.svg';


class Header extends Component {


  render() {
    // console.log('Header level',this.props.selectedpage);
    return (
      <div className="nav-header">
        <div className="lab-title">
          <span className='logo'>
            <img src={logo} alt="logo"/>
          </span>
          
          <h1 >Digital Innovation Lab</h1>
        </div>
        
        <Tabs selected={this.props.selectedpage} changeSelected={this.props.changeSelected.bind(this)} resetProjectPage={this.props.resetProjectPage.bind(this)}>
          <Pane label="About us">
            <div>tab 1 contents</div> 
          </Pane>
          <Pane label="Process">
            <div>tab 2 contents</div> 
          </Pane>
          <Pane label="Case study">
            <div>tab 3 contents</div> 
          </Pane>
          <Pane label="Contact">
            <div>tab 4 contents</div> 
          </Pane>
          <div className="tab-indicator"></div>
        </Tabs>

      </div>
    );
  }
}

export default Header;
