import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Pagecontent from './Pagecontent_selector';
import Footer from './components/Footer';

class App extends Component {

  constructor(){
    super();
    this.state = {
      selectedpage: 2,
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
