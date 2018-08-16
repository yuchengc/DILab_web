import React from 'react';
import './ConnectionUIUC.css';
import bg_img from '../../../../images/uiuc_bg.svg';
import '../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const ConnectionUIUC = (props) => {
	return(
		<div className='uiuc-section-frame'>
			<img className='uiuc-img col-11 col-xl-7 col-lg-8 col-md-10 col-sm-11' src={bg_img} alt='UIUC illustration'/>
			<ScrollAnimation animateIn="wapeLefttoRight" offset={200} duration={0.8} animateOnce={false} delay={0} >
				<div className='uiuc-section row no-gutters align-items-center align-self-center '>
					<h3 className='section-title col-6 offset-3 '>{props.sectionContent.title}</h3>
					<p >{props.sectionContent.paragraph}</p>
				</div>
			</ScrollAnimation>
		</div>
	);
}
export default ConnectionUIUC;