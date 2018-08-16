import React from 'react';
import './Approaches.css';
import Approachcards from './Approachcards';
import Scrollindicator from '../../../sharedcomponents/Scrollindicator';

const Approaches = (props) =>{
	
	return(
		
		<div className='work-process-internal-approaches row no-gutters'>

			<div className='col col-5 offset-2 col-xl-5 offset-xl-2 title'>
				<h3 >{props.sectionContent.slogan}</h3>
				<h5>{props.sectionContent.paragraph}</h5>
			</div>
			<Approachcards approaches={props.approachContent}/>
			<Scrollindicator wording='' side='left'/>
		</div>

	);
}
export default Approaches;

