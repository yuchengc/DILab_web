import React from 'react';
import './ProjectScope.css';
import Scrollindicator from '../../../sharedcomponents/Scrollindicator';
import '../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const ProjectScope = (props) =>{

	const renderButtons = (btn) =>{
		return btn.map((b)=>{
			return (
				<button type='button'>{b.title}</button>
			)
		});
	}
	
	return(
		<div className='work-process-scope row no-gutters'>
		
			<div className='content-section row no-gutters align-items-center'>
				
				<div className='paragraph-section col col-5 offset-2 col-xl-5 offset-xl-2 align-items-center'>
				<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<h3>{props.sectionContent.slogan}</h3>
					<h5>{props.sectionContent.paragraph}</h5>

					
					<div className='button-set'>
						{renderButtons(props.sectionContent.button)}
						
					</div>
					</ScrollAnimation>
				</div>
				
				

			</div>

			<Scrollindicator wording='' side='left'/>


		</div>
	);
}
export default ProjectScope;
