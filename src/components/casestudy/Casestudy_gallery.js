import React, { Component } from 'react';
import './Casestudy_gallery.css';
import Casestudy_cards from './Casestudy_cards'
import {case_content} from './case_content' 

class Casestudy_gallery extends Component {


	render(){
		return(
		<div className='casestudy-gallery'>
			
			
			<Casestudy_cards cases={this.props.case_content} select_project={this.props.select_project} size='m'/>
			
		</div>

	);
	}

}
export default Casestudy_gallery;