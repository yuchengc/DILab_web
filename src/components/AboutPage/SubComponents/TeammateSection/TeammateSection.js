import React, { Component } from 'react';
import PeopleCardsSet from './PeopleCardsSet';
import {peopleContent} from '../../peopleContent';
import './TeammateSection.css';

class TeammateSection extends Component {


	render(){
		return(
		<div className='teammates row no-gutters align-items-center'>
			
			<h3>TEAM</h3>
			<PeopleCardsSet people={peopleContent} />
			
		</div>

	);
	}

}
export default TeammateSection;