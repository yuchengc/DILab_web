import React, { Component } from 'react';
import "./Footer.css";
import logo from '../images/logo.svg';
// import Tabs from './Tabs'
// import Pane from './Pane'
// import Indicator from './Indicator'


class Footer extends Component {

  render() {
    // console.log('Header level',this.props.selectedpage);
    return (
      <footer className="footer row no-gutters justify-content-between align-items-center">
        <div className='left-items col-5 align-self-center'>
          <span className='logo '>
            <img  src={logo} alt="logo"/>
          </span>
          <span className='copyrightinfo'>
            <p>Power by</p>
            <h5 style={{color:'#68E4A3'}}>Syngenta</h5>
            <h6>Digital Innovation Lab</h6>
          </span>
        </div>
        
          
        
        <div className='right-items col-5'>
          <span className='contactinfo'>
            <p>Email: abce@email.com</p>
            <p>Address: 1800 S Oak St, Suite 112, Champaign IL</p>
          </span>
        </div>

      </footer>
    );
  }
}

export default Footer;