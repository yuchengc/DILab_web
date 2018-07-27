import React from 'react';
import './Projectscope.css'
import '../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Scrollindicator from './Scrollindicator';
// import Card from './Card';

const Projectscope = () =>{
	
	return(
		<div className='work-process-scope'>
			<div className='content-section'>
				<img className='section-bg' src='#' alt='bg'/>
				<div className='paragraph-section'>
					<h3>Measure Project scope </h3>
					<h5>A short sentence that describes this step. A short sentence that describes this step. A short sentence that describes this step.</h5>

					<ul>
						Some Questions we might ask:
						<li>- Clarify the context of an idea supported by our Business.</li>
						<li>- Reach a common understanding of the idea being presented.</li>
						<li>- Develop a high level "outline design on a page" for these solution options.</li>
					</ul>
				</div>
				<div className='button-set'>
					<button type='button'>DOWNLOAD THE QUESTIONNAIRE</button>
					
				</div>
				

			</div>
			<Scrollindicator wording='' side='left'/>


		</div>
	);
}
export default Projectscope;

			// <ScrollAnimation animateIn="wapeLefttoRight" offset={50} duration={0.8} delay={0} className='scroll-indicator-left' >
			// 	<div className='side-indicator-bar'></div>
			// 	<span className='side-caption-left'></span>
			// </ScrollAnimation>