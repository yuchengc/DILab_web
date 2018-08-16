import React from 'react';
import './OutCome.css';
import '../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const OutCome = (props) =>{
	
	return(
		<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
		<div className='work-process-outcome row no-gutters align-items-center'>
			<div className='content-section row no-gutters align-items-center'>
					<div className='side-img col-10 col-xl-5 col-lg-5 col-md-10 col-sm-10 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2'>
						<img className='' src={props.sectionContent.img} alt='bg'/>
					</div>
					<div className='paragraph-section col-10 offset-1 col-lg-5 col-xl-5 col-md-10 col-sm-10 offset-xl-1 offset-lg-1 offset-md-1 offset-sm-1 order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1'>
						<h3>{props.sectionContent.slogan}</h3>
						<h5>{props.sectionContent.paragraph}</h5>
					</div>
			</div>
		</div>
		</ScrollAnimation>
	);
}
export default OutCome;