import React from 'react';
// import './content_processpage.css'
import CasestudyCards from './CasestudyCards'
import {case_content} from './case_content' 
import "./CasestudyGallerySmall.css";
import '../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
// import Card from './Card';

const CasestudyGallerySmall = (props) =>{
	var display_num=props.cases_num;
	const sub_content = case_content.slice(0, display_num);
	return(
		<div className='casestudy-gallery-small col-10 col-xl-8 col-lg-8 col-md-8 col-sm-10 offset-1 offset-xl-2 offset-lg-2 offset-md-2 offset-sm-1'>
			<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
				<h3>What we have done - Case Study</h3>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
				<CasestudyCards cases={sub_content} size='sm' />
			</ScrollAnimation>
		</div>

	);
}
export default CasestudyGallerySmall;