import React from 'react';
import './Questionnaire.css'
import '../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Scrollindicator from '../../../sharedcomponents/Scrollindicator';

const Questionnaire = (props) =>{

	const renderList = (listitem) =>{
		return listitem.map((item)=>{
			
			return(
				<li>{item}</li>
			);
		});
	}
	const renderButtons = (btn) =>{
		return btn.map((b)=>{
			return (
				<button type='button'>{b.title}</button>
			)
		});
	}

	return(
		<div className='work-process-ques row no-gutters'>
			<div className='content-section col-12 row align-items-center'>
				<img src='#' alt='bg'/>
				
					<div className='paragraph-section col-10 col-xl-5 col-lg-5 col-md-10 col-sm-10 offset-1 offset-xl-5 offset-lg-5 offset-md-1 offset-sm-1'>
						<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
							<h3>{props.sectionContent.slogan}</h3>
							<h5>{props.sectionContent.paragraph}</h5>

							<ul >
								{props.sectionContent.list.header}
								{renderList(props.sectionContent.list.items)}
							</ul>
							<div className='button-set '>
								{renderButtons(props.sectionContent.button)}
							</div>
						</ScrollAnimation>
					</div>
			</div>
			<Scrollindicator wording='BRING YOUR IDEA HERE !' side='right' />
		</div>
	);
}
export default Questionnaire;