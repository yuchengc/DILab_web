import React, { Component } from 'react';
// import CasestudyGallery from './SubComponents/CasestudyGallery/CasestudyGallery';
// import TopBanner from '../sharedcomponents/TopBanner'
import './CaseStudyPage.css';
import {case_content} from './case_content' 
// import Filter from './SubComponents/Filter/Filter';
// import casestudy_banner from '../../images/casestudy_banner.svg';
import { Switch, Route } from 'react-router-dom';
import ProjectMenu from './ProjectMenu';
import Project from './SubComponents/ProjectScenes/Project';


class CaseStudyPage extends Component {
	constructor(props){
		super(props);
		this.state = { cases: case_content, 
					   filter: 'all',
					  }
	}
	onFilterChange = (event) => {
		this.setState({filter : event.target.id})
	}

	onSelectProject = (event) => {
		var selectedProject=event.target.closest('.project-card').getAttribute('projectkey');
		this.props.pagereset_f(selectedProject);
		console.log("click a project", event.target.closest('.project-card').getAttribute('projectkey'))
	}

	render(){
		return(
			<Switch>
			    
			    <Route exact path='/casestudy/' component={ProjectMenu}/>
			    <Route path='/casestudy/:number' component={Project}/>
			</Switch>
		)
		
	}

}
export default CaseStudyPage;