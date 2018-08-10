import React from 'react';
import './Outcome.css';
import outcome from '../../images/outcome.png';
import '../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
// import Card from './Card';

const Outcome = () =>{
	
	return(
		<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
		<div className='work-process-outcome row no-gutters align-items-center'>
			
			<div className='content-section row no-gutters align-items-center'>
				
					<div className='side-img col-10 col-xl-5 col-lg-5 col-md-10 col-sm-10 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2'>
						<img className='' src={outcome} alt='bg'/>
					</div>
						
					<div className='paragraph-section col-10 offset-1 col-lg-5 col-xl-5 col-md-10 col-sm-10 offset-xl-1 offset-lg-1 offset-md-1 offset-sm-1 order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1'>
						<h3>Minimum Viable Product</h3>
						<h5>(Need rephrase) Delivery of a basic working version of the product with enough features to be launched with real users and integrated with SYT systems​</h5>

						<ul>
							Some Questions we might ask:
							<li>Question 1, what is your business goal?</li>
							<li>Question 2, Who is the target user? What problem you want to solve?</li>
							<li>Question 3, What is your project plan?</li>
						</ul>
					</div>


			</div>
			

		</div>
		</ScrollAnimation>
	);
}
export default Outcome;