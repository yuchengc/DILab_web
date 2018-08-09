import React from 'react';
// import './content_processpage.css'
import Casestudy_cards from './Casestudy_cards'
import {case_content} from './case_content' 
import "./Casestudy_gallery_small.css"
// import Card from './Card';

const Casestudy_gallery_small = (props) =>{
	var display_num=props.cases_num;
	const sub_content = case_content.slice(0, display_num);
	return(
		<div className='casestudy-gallery-small col-10 col-xl-8 col-lg-8 col-md-8 col-sm-10 offset-1 offset-xl-2 offset-lg-2 offset-md-2 offset-sm-1'>
			
			<h3>What we have done - Case Study</h3>
			
			<Casestudy_cards cases={sub_content} size='sm' />
			
		</div>

	);
}
export default Casestudy_gallery_small;