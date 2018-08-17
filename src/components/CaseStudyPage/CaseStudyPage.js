import React, { Component } from 'react';
import './CaseStudyPage.css';
import {caseContent} from '../../ContentFolder/CaseStudyPage/Gallery/caseContent'; 
import { Switch, Route } from 'react-router-dom';
import ProjectMenu from './ProjectMenu';
import Project from './SubComponents/ProjectScenes/Project';


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
		this.props.pagereset_f(selectedProject);
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