import React from 'react';
// import './content_processpage.css'
import Casestudy_cards from './Casestudy_cards'
import {case_content} from './case_content' 
// import Card from './Card';

const Casestudy_gallery_small = () =>{
	
	return(
		<div className='casestudy-gallery-small'>
			<h3>What we have done - Case Study</h3>
			
			<Casestudy_cards cases={case_content} size='sm'/>
			
		</div>

	);
}
export default Casestudy_gallery_small;