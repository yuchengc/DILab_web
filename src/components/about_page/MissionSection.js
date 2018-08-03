import React from 'react';
import './MissionSection.css';
import Scrollindicator from '../process_page/Scrollindicator'

// import Card from './Card';

const MissionSection = () =>{
	
	return(
		<div>
		<div className='section-container missionsection' >
			<div>
				<div className='paragraph-section-right'>
					<h3>WE ARE</h3>
					<h5>Some body text about our mission and how much we value communication and that we want to share the cool stuff we do. Some body text about our mission and how much we value communication and that we want to share the cool stuff we do.</h5>
				</div>
				<div className='paragraph-section-right'>
					<h3 style={{textAlign: 'left'}}>WE BELIEVE</h3>
					<h5>Some body text about our mission and how much we value communication and that we want to share the cool stuff we do. Some body text about our mission and how much we value communication and that we want to share the cool stuff we do.</h5>
				</div>

			</div> 
			


		</div>
		<Scrollindicator wording='FOCUS' side='right'/>
		</div>
	);
}
export default MissionSection;
