import React from 'react';
import './StartGreeting.css';
import '../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ideas_bg from '../../../../images/ideas_bg.svg';
import Scrollindicator from '../../../sharedcomponents/Scrollindicator';

const StartGreeting = (props) =>{
	
	return(
		<div className='work-process-greeting row no-gutters'>
			<div className='content-section col-12 row align-items-center no-gutters'>
				<img className='section-bg col-xl-8 col-lg-8 col-md-8 col-sm-10' src={ideas_bg} alt='bg'/>
				<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<div className='col col-10 col-xl-5 col-lg-5 col-md-10 col-sm-10 offset-1 offset-xl-2 offset-lg-2 offset-md-1 offset-sm-1 align-items-center '>
						<h3>{props.sectionContent.slogan}</h3>
						<h5>{props.sectionContent.paragraph}</h5>
					</div>
				</ScrollAnimation>

			</div>
			<Scrollindicator wording={props.sectionContent.sideWord.toUpperCase()} side='left'/>
		</div>
	);
}
export default StartGreeting;
