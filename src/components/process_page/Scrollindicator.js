import React from 'react';
import './Scrollindicator.css';
import '../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Scrollindicator = (props) =>{
	
	return(
	
		<ScrollAnimation animateIn="wapeLefttoRight" offset={50} duration={0.8} animateOnce={true} delay={0} className={`scroll-indicator-${props.side}`} >
			
			<div className='side-indicator-bar'></div>
			<span className={`side-caption-${props.side}`}>{props.wording}</span>
		
		</ScrollAnimation>

	);
}
export default Scrollindicator;