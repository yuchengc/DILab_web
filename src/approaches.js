import React from 'react';
import './content_processpage.css'
import Approachcards from './Approachcards'
import {approaches_content} from './approaches_content' 
// import Card from './Card';

const Approaches = () =>{
	
	return(
		<div className='work-process-internal-approaches'>
			<h3>Approaches</h3>
			<h5>some sentances some sentances some sentances some sentances some sentances </h5>
			<Approachcards approaches={approaches_content}/>
			<div className='scroll-indicator-left'>
				<span className='side-caption-left'>WE DO MVP!</span>
			</div>
		</div>

	);
}
export default Approaches;