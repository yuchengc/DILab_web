import React, { Component } from 'react';
import Processpage from './components/ProcessPage/Processpage'
import Casestudypage from './components/CaseStudyPage/CaseStudyPage'
import Aboutpage from './components/AboutPage/Aboutpage'
import Contactpage from './components/ContactPage/ContactPage'



class PagecontentSelector extends Component {
	//base on the top-tab, this component will return the relavent content for that page
	render(){

		switch (this.props.selectedpage){
			default:
				return(
					<Aboutpage />
				);
			case 0:
				return(
					<Aboutpage />
				);
				// break;
			case 1:
				return(
					<div>

						<Processpage />
					</div>

				);
				// break;
			case 2:
				// console.log("content selector", this.props.selectedProject)
				return(
					<div><Casestudypage pagereset_f={this.props.default_selectedProject_f} selectedProject={this.props.selectedProject}/></div>
				);
				// break;
			case 3:
				return(
					<div>
						<Contactpage />
					</div>
				);
				// break;

		}
		
	}

}
export default PagecontentSelector;