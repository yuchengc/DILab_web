import React from 'react';
import './Questionnaire.css'
import '../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Scrollindicator from '../../sharedcomponents/Scrollindicator';
// import Card from './Card';

const Questionnaire = () =>{
	
	return(
		<div className='work-process-ques row no-gutters'>
			<div className='content-section col-12 row align-items-center'>
				<img src='#' alt='bg'/>
				<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<div className='paragraph-section col-10 col-xl-5 col-lg-5 col-md-10 col-sm-10 offset-1 offset-xl-5 offset-lg-5 offset-md-1 offset-sm-1'>
						<h3>Help us understand your goal</h3>
						<h5>A short sentence that describes this step. A short sentence that describes this step. A short sentence that describes this step.</h5>

						<ul>
							Some Questions we might ask:
							<li>Question 1, what is your business goal?</li>
							<li>Question 2, Who is the target user? What problem you want to solve?</li>
							<li>Question 3, What is your project plan?</li>
						</ul>
						<div className='button-set '>
							<button type='button'>DOWNLOAD THE QUESTIONNAIRE</button>
							<button type='button'>CONTACT US</button>
						</div>
					</div>
				</ScrollAnimation>
				

			</div>
			<Scrollindicator wording='BRING YOUR IDEA HERE !' side='right' />
			

		</div>
	);
}
export default Questionnaire;

// <ScrollAnimation animateIn="wapeLefttoRight" offset={50} duration={0.8} delay={0} className='scroll-indicator-right' >
// 					<div className='side-indicator-bar'></div> 
//   					<span className='side-caption-right'>BRING YOUR IDEA HERE !</span>
  				
				
// 			</ScrollAnimation>