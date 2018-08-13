import React, { Component } from 'react';
import Processpage from './components/ProcessPage/Processpage'
import Casestudypage from './components/CaseStudyPage/CaseStudyPage'
import Aboutpage from './components/AboutPage/Aboutpage'
import Contactpage from './components/ContactPage/ContactPage'
import { Switch, Route } from 'react-router-dom'



const PagecontentSelector = () => (
	//base on the top-tab, this component will return the relavent content for that page
	<main>
		<Switch>
		    <Route exact path='/aboutus' component={Aboutpage}/>
		    <Route path='/process' component={Processpage}/>
		    <Route path='/casestudy' component={Casestudypage}/>
		    <Route path='/contact' component={Contactpage}/>
	    </Switch>
	</main>
	
)
export default PagecontentSelector;


// render(){

// 		switch (this.props.selectedpage){
// 			default:
// 				return(
// 					<Aboutpage />
// 				);
// 			case 0:
// 				return(
// 					<Aboutpage />
// 				);
// 				// break;
// 			case 1:
// 				return(
// 					<div>

// 						<Processpage />
// 					</div>

// 				);
// 				// break;
// 			case 2:
// 				// console.log("content selector", this.props.selectedProject)
// 				return(
// 					<div><Casestudypage pagereset_f={this.props.default_selectedProject_f} selectedProject={this.props.selectedProject}/></div>
// 				);
// 				// break;
// 			case 3:
// 				return(
// 					<div>
// 						<Contactpage />
// 					</div>
// 				);
// 				// break;

// 		}
		
// 	}
