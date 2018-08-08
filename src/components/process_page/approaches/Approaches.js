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
		<div className='work-process-internal-approaches row no-gutters'>
			<div className='col col-5 offset-2 col-xl-5 offset-xl-2 title'>
				<h3 >Approaches</h3>
				<h5>some sentances some sentances some sentances some sentances some sentances </h5>
			</div>
			<Approachcards approaches={approaches_content}/>
			<Scrollindicator wording='' side='left'/>
			
		</div>

	);
}
export default Approaches;

// <ScrollAnimation animateIn="wapeLefttoRight" offset={50}  duration={0.8} delay={0} className='scroll-indicator-left' >
// 				<div className='side-indicator-bar'></div>
// 				<span className='side-caption-left'>WE DO MVP!</span>
// 			</ScrollAnimation>