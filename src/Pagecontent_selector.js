import React, { Component } from 'react';
import Processpage from './components/process_page/Processpage'
import Casestudypage from './components/casestudy/Casestudypage'
import Aboutpage from './components/about_page/Aboutpage'


class Pagecontent extends Component {

	render(){

		switch (this.props.selectedpage){
			case 0:
				return(
					<Aboutpage />
				);
				break;
			case 1:
				return(
					<div>

						<Processpage />
					</div>

				);
				break;
			case 2:
				// console.log("content selector", this.props.selectedProject)
				return(
					<div><Casestudypage pagereset_f={this.props.default_selectedProject_f} selectedProject={this.props.selectedProject}/></div>
				);
				break;
			case 3:
				return(
					<div>contact oage</div>
				);
				break;

		}
		
	}

}
export default Pagecontent;