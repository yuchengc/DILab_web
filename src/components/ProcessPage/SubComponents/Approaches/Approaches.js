import React from 'react';
import './Approaches.css';
import Approachcards from './Approachcards';
import {approaches_content} from './approaches_content'; 
import Scrollindicator from '../../../sharedcomponents/Scrollindicator';
// import Card from './Card';

const Approaches = () =>{
	
	return(
		
		<div className='work-process-internal-approaches row no-gutters'>

			<div className='col col-5 offset-2 col-xl-5 offset-xl-2 title'>
				<h3 >Approaches</h3>
				<h5>some sentances some sentances some sentances some sentances some sentances </h5>
			</div>
			<Approachcards approaches={approaches_content}/>
			<Scrollindicator wording='' side='left'/>
			
		</div>

	);
}
export default Approaches;

