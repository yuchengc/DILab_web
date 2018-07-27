import React from 'react';
import './Approaches.css'
import Approachcards from './Approachcards'
import {approaches_content} from './approaches_content' 
import '../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Scrollindicator from '../Scrollindicator';
// import Card from './Card';

const Approaches = () =>{
	
	return(
		<div className='work-process-internal-approaches'>
			<h3>Approaches</h3>
			<h5>some sentances some sentances some sentances some sentances some sentances </h5>
			<Approachcards approaches={approaches_content}/>
			<Scrollindicator wording='WE DO MVP!' side='left'/>
			
		</div>

	);
}
export default Approaches;

// <ScrollAnimation animateIn="wapeLefttoRight" offset={50}  duration={0.8} delay={0} className='scroll-indicator-left' >
// 				<div className='side-indicator-bar'></div>
// 				<span className='side-caption-left'>WE DO MVP!</span>
// 			</ScrollAnimation>