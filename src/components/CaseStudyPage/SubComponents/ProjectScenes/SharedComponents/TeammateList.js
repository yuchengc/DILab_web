import React, { Component } from 'react';
import PeopleCardsSetProject from '../../../../AboutPage/SubComponents/TeammateSection/PeopleCardsSetProject';
import {peopleContent} from '../../../../AboutPage/peopleContent';
import './TeammateList.css';

class TeammateList extends Component {


	render(){
		return(
		<div className='teammates-frame row no-gutters align-items-center'>
			
			<h3>TEAM</h3>
			<PeopleCardsSetProject teamlist={this.props.teamlist} />
			
		</div>

	);
	}

}
export default TeammateList;