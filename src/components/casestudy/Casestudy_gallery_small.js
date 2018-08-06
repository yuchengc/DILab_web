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
		<div className='casestudy-gallery-small'>
			<h3>What we have done - Case Study</h3>
			
			<Casestudy_cards cases={sub_content} size='sm' />
			
		</div>

	);
}
export default Casestudy_gallery_small;