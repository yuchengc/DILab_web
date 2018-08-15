import React, { Component } from 'react';
import "./Header.css";
import Tabs from './Tabs'
import Pane from './Pane'
// import Indicator from './Indicator'
import logo from '../images/logo.svg';

const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scrollPositionY: 0,
    }
  }


  componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // I picked this because it's approx 1 frame (ie: 16.7ms)
    // You'll want to modulate that to your taste.
    // Add console.logs in handleScroll function to check if its flooding.
    return window.addEventListener('scroll', debounce(this.handleScroll, 16))
  }

  handleScroll = () => {
    // + is unary operator, same as Number(window.scrollY)
    const scrollPositionY = +window.scrollY
    // console.log(scrollPositionY)
    if (scrollPositionY > 200){
      document.querySelector('.nav-header').style.background='rgba(255,255,255,0.8)';
    }
    else{
      document.querySelector('.nav-header').style.background='rgba(255,255,255,0)';
    }
    
    return this.setState({ scrollPositionY })
  }

  render() {
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
