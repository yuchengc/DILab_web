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
      selectedProject: 0,
    }
  }


  changeSelected(val) {
    this.setState({selectedpage: val});
    console.log('App level->change selectedpage',val);
  }
  resetProjectPage(p_id){
    this.setState({selectedProject: p_id});
  }

  render() {
    console.log('App level render->selectedpage',this.state.selectedpage);
    console.log('App level render->selected project',this.state.selectedProject);
    // console.log(this.state.selectedpage);
    return (
      <div>
        <Header selectedpage={this.state.selectedpage} changeSelected={this.changeSelected.bind(this)} resetProjectPage={this.resetProjectPage.bind(this)}/>

        <Pagecontent className='content' selectedpage={this.state.selectedpage} selectedProject={this.state.selectedProject} default_selectedProject_f={this.resetProjectPage.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;
