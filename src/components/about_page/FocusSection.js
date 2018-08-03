import React from 'react';
import Scrollindicator from '../process_page/Scrollindicator';
import './FocusSection.css';
import image_example from '../../images/img_example.png';


const FocusSection = () =>{
	
	return(
		<div>
			<div className='section-container focussection' >
				
				<div className='paragraph-section-left'>
					<h3>OUR FOCUS</h3>
					<h4>Solve business challenges</h4>
					<h5>Collaborate with us to dissect the challenge at hand, explore possible avenues of exploration, and create an impeccable end product.</h5>
					<img src={image_example} className='section-img section-img-right' alt='illustration'/>	
				</div>
				
			

				<div className='paragraph-section'>
					
					<h4>WE BELIEVE</h4>
					<h5>Some body text about our mission and how much we value communication and that we want to share the cool stuff we do. Some body text about our mission and how much we value communication and that we want to share the cool stuff we do.</h5>
					<img src={image_example} className='section-img section-img-left' alt='illustration'/>
				</div>

			</div>
			<Scrollindicator wording='FOCUS' side='left'/>
		</div>
	);
}
export default FocusSection;
