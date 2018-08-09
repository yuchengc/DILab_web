import React, { Component } from 'react';
import './Casestudy_gallery.css';
import Casestudy_cards from './Casestudy_cards'
import {case_content} from './case_content' 

class Casestudy_gallery extends Component {


	render(){
		return(
		<div className='casestudy-gallery col-8 col-xl-8 col-lg-8 col-md-10 offset-2 offset-xl-2 offset-lg-2 offset-md-1'>
			
			
			<Casestudy_cards cases={this.props.case_content} select_project={this.props.select_project} size='m'/>
			
		</div>

	);
	}

}
export default Casestudy_gallery;