import React from 'react';
import './Futuresupport.css';
import '../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Wheat_icon from '../../../images/wheat.svg';


const Futuresupport = () =>{
	
	return(
		
		<div className='work-process-Futuresupport row no-gutters'>

			<div className='content-section row no-gutters align-items-center' >
				
				<div className='paragraph-section col col-5 col-xl-5 col-lg-5 offset-2 offset-xl-2 offset-lg-2'>
					<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<h3>Learn from Market</h3>
					<h5>A short sentence that describes this step. A short sentence that describes this step. A short sentence that describes this step.</h5>
					</ScrollAnimation>
					
				</div>
				
				
				
			</div>
			<div className={`scroll-indicator-right`} >
				<div className='scroll-indicator-icon'>
					<img src={Wheat_icon} alt='crop'/>
				</div>
				<div className='side-indicator-bar'></div>
				<span className={`side-caption-right`}>CASE STUDY</span>
			
			</div>
				
			
		</div>

	);
}
export default Futuresupport;