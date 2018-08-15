import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import PagecontentSelector from './PagecontentSelector';
import Footer from './components/Footer';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { HashRouter } from 'react-router-dom';

class App extends Component {

  constructor(){
    super();
    this.state = {
      selectedpage: 0, //control the displayed page , "about us", "process", "case study", "contact us"
      selectedProject: 0, // control which project is displayed
    }
  }

  changeSelected(val) {
    this.setState({selectedpage: val});
    window.scrollTo(0,0);

  }

  resetProjectPage(p_id){
    this.setState({selectedProject: p_id});
    window.scrollTo(0,0);
  }

  render() {
  
    return (
      <div className='container-fluid app-frame'>
        <Header 
          className='row' 
          selectedpage={this.state.selectedpage} 
          changeSelected={this.changeSelected.bind(this)} 
          resetProjectPage={this.resetProjectPage.bind(this)}
          />

        <PagecontentSelector/>
        <Footer />
      </div>
    );
  }
}

export default App;
