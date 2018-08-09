import React from 'react';
import './Startgreeting.css';
import '../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ideas_bg from '../../images/ideas_bg.svg';
import Scrollindicator from './Scrollindicator';
// import Card from './Card';

const Startgreeting = () =>{
	
	return(
		<div className='work-process-greeting row no-gutters'>
			<div className='content-section col-12 row align-items-center no-gutters'>
				<img className='section-bg col-xl-8 col-lg-8 col-md-8 col-sm-10' src={ideas_bg} alt='bg'/>
				<div className='col col-10 col-xl-5 col-lg-5 col-md-10 col-sm-10 offset-1 offset-xl-2 offset-lg-2 offset-md-1 offset-sm-1 align-items-center '>
					<h3>You have a idea ? Great !</h3>
					<h5>A short sentence that describes the overall process. A short sentence that describes the overall process. A short sentence that describes the overall process.</h5>

				</div>
				

			</div>
			<Scrollindicator wording='BRING YOUR IDEA HERE !' side='left'/>

		</div>
	);
}
export default Startgreeting;

// <ScrollAnimation animateIn="wapeLefttoRight" offset={50} duration={0.8}  delay={0} className='scroll-indicator-left' >
// 				<div className='side-indicator-bar'></div>
// 				<span className='side-caption-left'>BRING YOUR IDEA HERE !</span>
			
// 			</ScrollAnimation>