import React, { Component } from 'react';
import CasestudyGallery from './CasestudyGallery';
import TopBanner from '../TopBanner'
import './Casestudypage.css';
import {case_content} from './case_content' 
import Filter from './Filter';
import casestudy_banner from '../../images/casestudy_banner.svg';


class Casestudypage extends Component {
	constructor(props){
		super(props);
		this.state = { cases: case_content, 
					   filter: 'all',
					   
					  }
	}
	onFilterChange = (event) => {
		// console.log(event.target.id)
		this.setState({filter : event.target.id})
		// const filteredCases = this.state.cases.filter(cases => {
		// 	return cases.calalog.includes(this.state.filter.toLowerCase())
		// })
		// console.log('on triggered event',filteredCases)
	}


	onSelectProject = (event) => {
		// this.setState({selected_project : 1})
		var selectedProject=event.target.closest('.project-card').getAttribute('projectkey');
		this.props.pagereset_f(selectedProject);
		console.log("click a project", event.target.closest('.project-card').getAttribute('projectkey'))
	}

	render(){
		// if (this.props.pagereset === 0){
		// 	this.setState({selected_project : 0})
		// }
		// console.log("page reset",this.props.pagereset)
		const filteredCases = this.state.cases.filter(cases => {
			return cases.calalog.includes(this.state.filter.toLowerCase())
		})
		// console.log('on render level',filteredCases)
		// console.log('selected_project',this.state.selected_project)
		if (this.props.selectedProject === 0){
			
			return(
				<div className='casestudypage-frame row no-gutters'>
					<TopBanner 
						illustration={casestudy_banner}
						title='Take a look at our works'
						subtitle='We focus on Web , mobile app design and development. here are some awesome works.'
					/>
					<Filter filterChange={this.onFilterChange}/>
					<CasestudyGallery case_content={filteredCases} select_project={this.onSelectProject}/>
				</div>
			);
		}
		else {
			return(
				<div> specific project !!!!!</div>
			);
		}
	}

}
export default Casestudypage;