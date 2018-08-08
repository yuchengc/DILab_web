import React from 'react';
import './MissionSection.css';
import Scrollindicator from '../process_page/Scrollindicator'

// import Card from './Card';

const MissionSection = () =>{
	
	return(
		<div>
		<div className='section-container missionsection row no-gutters align-items-center' >
			<div>
				<div className='paragraph-section-right col col-5 col-xl-5 col-lg-5 offset-5 offset-xl-5 offset-lg-5'>
					<h3>WE ARE</h3>
					<h5>Some body text about our mission and how much we value communication and that we want to share the cool stuff we do. Some body text about our mission and how much we value communication and that we want to share the cool stuff we do.</h5>
				</div>
				<div className='paragraph-section-right col col-5 col-xl-5 col-lg-5 offset-5 offset-xl-5 offset-lg-5'>
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
