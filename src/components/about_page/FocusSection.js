import React from 'react';
import Scrollindicator from '../process_page/Scrollindicator';
import './FocusSection.css';
import image_example from '../../images/img_example.png';
import '../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const FocusSection = () =>{
	
	return(
		<div>
			<div className='section-container focussection row no-gutters align-items-center' >
				<h3 className='col col-8 col-xl-8 col-lg-8 offset-2 offset-xl-2 offset-lg-2'>OUR FOCUS</h3>
				<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<div className='paragraph-section col col-8 col-xl-8 col-lg-8 offset-2 offset-xl-2 offset-lg-2'>
						<div className='row align-items-start'>
							<div className='text-content col col-8 col-xl-8 col-lg-8'>
								<h4 >Solve business challenges</h4>
								<h5 >Collaborate with us to dissect the challenge at hand, explore possible avenues of exploration, and create an impeccable end product.</h5>
							</div>
							<div className='section-img col col-4 col-xl-4 col-lg-4'>
								<img src={image_example}  alt='illustration'/>	
							</div> 
						</div>
					</div>
				</ScrollAnimation>
			
				<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<div className='paragraph-section col col-8 col-xl-8 col-lg-8 offset-2 offset-xl-2 offset-lg-2'>
						<div className='row align-items-start'>
							<div className='text-content col col-8 col-xl-8 col-lg-8 order-2'>
								<h4>WE BELIEVE</h4>
								<h5>Some body text about our mission and how much we value communication and that we want to share the cool stuff we do. Some body text about our mission and how much we value communication and that we want to share the cool stuff we do.</h5>
							</div>
							<div className='section-img col col-4 col-xl-4 col-lg-4 order-1 '>
								<img src={image_example}  alt='illustration'/>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>
			<Scrollindicator wording='FOCUS' side='left'/>
		</div>
	);
}
export default FocusSection;
