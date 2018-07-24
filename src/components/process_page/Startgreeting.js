import React from 'react';
import './content_processpage.css';
import '../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ideas_bg from '../../images/ideas_bg.png';
// import Card from './Card';

const Startgreeting = () =>{
	
	return(
		<div className='work-process-greeting'>
			<div className='content-section'>
				<img className='section-bg' src={ideas_bg} alt='bg'/>
				<div className='paragraph-section'>
					<h3>You have a idea ?</h3>
					<h5>A short sentence that describes the overall process. A short sentence that describes the overall process. A short sentence that describes the overall process.</h5>

				</div>
				

			</div>
			<ScrollAnimation animateIn="wapeLefttoRight" offset={50} duration={0.8}  delay={0} className='scroll-indicator-left' >
				<div className='side-indicator-bar'></div>
				<span className='side-caption-left'>BRING YOUR IDEA HERE !</span>
			
			</ScrollAnimation>

		</div>
	);
}
export default Startgreeting;