import React, { Component } from 'react';
import './CasestudyGallery.css';
import CasestudyCards from './CasestudyCards';
// import {case_content} from './case_content';

class CasestudyGallery extends Component {


	render(){
		return(
		<div className='casestudy-gallery col-8 col-xl-8 col-lg-8 col-md-10 offset-2 offset-xl-2 offset-lg-2 offset-md-1'>
			
			
			<CasestudyCards cases={this.props.case_content} select_project={this.props.select_project} size='m'/>
			
		</div>

	);
	}

}
export default CasestudyGallery;