import React from 'react';
import './ProjectTopBanner.css';
import iphonemockup from '../../../../../images/iPhoneMockup.png';
import '../../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const ProjectTopBanner =(props)=>{
	return(

		<div className='project-top-banner-frame col-8 offset-2'>
			<div className='row align-items-center'>
			<span className='text-section col-8'>
				<ScrollAnimation animateIn="fadeInUp" offset={0} duration={0.8} animateOnce={true} delay={0} >
					<h3>Project Titile</h3>
					<p>A short sentance/slogan that introduce this application</p>
				</ScrollAnimation>
			</span>
			<span className='project-mockup col-4'>
				<ScrollAnimation animateIn="fadeInDown" offset={0} duration={0.8} animateOnce={true} delay={0} >
					<img src={iphonemockup} alt='featured screen' />
				</ScrollAnimation>
			</span>
			</div>
		</div>

	);
}
export default ProjectTopBanner;