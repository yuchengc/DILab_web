import React, { Component } from 'react';
import CasestudyGallery from './SubComponents/CasestudyGallery/CasestudyGallery';
import TopBanner from '../sharedcomponents/TopBanner'
import './CaseStudyPage.css';
import {caseContent} from '../../ContentFolder/CaseStudyPage/Gallery/caseContent'; 
import Filter from './SubComponents/Filter/Filter';
import casestudy_banner from '../../images/casestudy_banner.svg';



class CaseStudyPage extends Component {
	constructor(props){
		super(props);
		this.state = { cases: caseContent, 
					   filter: 'all',
					  }
	}


	onFilterChange = (event) => {
		this.setState({filter : event.target.id})
	}

	onSelectProject = (event) => {
		var selectedProject=event.target.closest('.project-card').getAttribute('projectkey');
		window.scrollTo(0,0); 
	}

	render(){
		
		const filteredCases = this.state.cases.filter(cases => {
			return cases.calalog.includes(this.state.filter.toLowerCase())
		})
		return(
			<div className='casestudypage-frame row no-gutters'>
				<TopBanner 
					illustration={casestudy_banner}
					title='Take a look at our works'
					subtitle='We focus on Web , mobile app design and development. here are some awesome works.'
				/>
				<Filter filterChange={this.onFilterChange}/>
				<CasestudyGallery caseContent={filteredCases} select_project={this.onSelectProject}/>
			</div>
		);
	}
}
export default CaseStudyPage;