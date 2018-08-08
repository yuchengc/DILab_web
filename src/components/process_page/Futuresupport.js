import React from 'react';
import './Futuresupport.css';
import '../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Wheat_icon from '../../images/wheat.svg';
import './Scrollindicator.css';
// import Scrollindicator from './Scrollindicator';
// import Card from './Card';

const Futuresupport = () =>{
	
	return(
		<div className='work-process-Futuresupport row no-gutters'>
			<div className='content-section row no-gutters align-items-center' >
				
				<div className='paragraph-section col col-5 col-xl-5 col-lg-5 offset-2 offset-xl-2 offset-lg-2'>
					<h3>Learn from Market</h3>
					<h5>A short sentence that describes this step. A short sentence that describes this step. A short sentence that describes this step.</h5>

					
				</div>
				
				

			</div>
			<div className={`scroll-indicator-right`} >
				<div className='scroll-indicator-icon'>
					<img src={Wheat_icon} />
				</div>
				<div className='side-indicator-bar'></div>
				<span className={`side-caption-right`}>CASE STUDY</span>
			
			</div>
				

		</div>
	);
}
export default Futuresupport;