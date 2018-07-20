import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Pagecontent from './Pagecontent';
import Footer from './Footer';

class App extends Component {

  constructor(){
    super();
    this.state = {
      selectedpage: 1,
    }
  }


  changeSelected(val) {
    this.setState({selectedpage: val});
    console.log('App level->change selectedpage',val);
  }


  render() {
    console.log('App level render->selectedpage',this.state.selectedpage);
    // console.log(this.state.selectedpage);
    return (
      <div>
        <Header selectedpage={this.state.selectedpage} changeSelected={this.changeSelected.bind(this)}/>

        <Pagecontent className='content' selectedpage={this.state.selectedpage}  />
        <Footer />
      </div>
    );
  }
}

export default App;
