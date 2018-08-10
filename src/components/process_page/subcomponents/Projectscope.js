import React from 'react';
import './Projectscope.css';
import Scrollindicator from '../../sharedcomponents/Scrollindicator';
import '../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const Projectscope = () =>{
	
	return(
		<div className='work-process-scope row no-gutters'>
		
			<div className='content-section row no-gutters align-items-center'>
				
				<div className='paragraph-section col col-5 offset-2 col-xl-5 offset-xl-2 align-items-center'>
				<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<h3>Measure Project scope </h3>
					<h5>A short sentence that describes this step. A short sentence that describes this step. A short sentence that describes this step.</h5>

					<ul>
						Some Questions we might ask:
						<li>- Clarify the context of an idea supported by our Business.</li>
						<li>- Reach a common understanding of the idea being presented.</li>
						<li>- Develop a high level "outline design on a page" for these solution options.</li>
					</ul>
					<div className='button-set'>
						<button type='button'>DOWNLOAD THE QUESTIONNAIRE</button>
						
					</div>
					</ScrollAnimation>
				</div>
				
				

			</div>

			<Scrollindicator wording='' side='left'/>


		</div>
	);
}
export default Projectscope;