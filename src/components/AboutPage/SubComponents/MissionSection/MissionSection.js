import React from 'react';
import './MissionSection.css';
import Scrollindicator from '../../../sharedcomponents/Scrollindicator';
import '../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const MissionSection = (props) =>{
	
	return(
		<div>
		<div className='section-container missionsection row no-gutters align-items-center' >
			<div>
				<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<div className='paragraph-section-right col col-5 col-xl-5 col-lg-5 offset-5 offset-xl-5 offset-lg-5'>
						<h3>{props.sectionContent[0].slogan}</h3>
						<h5>{props.sectionContent[0].paragraph}</h5>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<div className='paragraph-section-right col col-5 col-xl-5 col-lg-5 offset-5 offset-xl-5 offset-lg-5'>
						<h3 style={{textAlign: 'left'}}>{props.sectionContent[1].slogan}</h3>
						<h5>{props.sectionContent[1].paragraph}</h5>
					</div>
				</ScrollAnimation>
			</div> 
		</div>
		<Scrollindicator wording='FOCUS' side='right'/>
		</div>
	);
}
export default MissionSection;
