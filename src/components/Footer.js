import React, { Component } from 'react';
import "./footer.css";
import logo from '../images/logo.png';
// import Tabs from './Tabs'
// import Pane from './Pane'
// import Indicator from './Indicator'


class Footer extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     selected: 0,
  //   }
  // }

  // changeSelected(val) {
  //   this.setState({selected: val});
  //   // this.props.changeSelected(val);
  //   console.log('Header level->selectedpage',this.state.selected);
  // }

  render() {
    // console.log('Header level',this.props.selectedpage);
    return (
      <footer className="footer">
        <div className="lab-title">
          <img src={logo} alt="logo"/>
          <h1 >Digital Innovation Lab</h1>
        </div>
        <div>Contact information</div>


      </footer>
    );
  }
}

export default Footer;