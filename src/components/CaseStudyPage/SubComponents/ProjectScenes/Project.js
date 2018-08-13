import React, { Component } from 'react';
import ProjectTopBanner from './SharedComponents/ProjectTopBanner';
import ProblemStatement from './SharedComponents/ProblemStatement';
import FeatureImgLeft from './SharedComponents/FeatureImgLeft';
import FeatureImgRight from './SharedComponents/FeatureImgRight';
import FeatureImgRightBg from './SharedComponents/FeatureImgRightBg';
import FeatureImgCenter from './SharedComponents/FeatureImgCenter';
import TimeLine from './SharedComponents/TimeLine'



const CasestudyGallery =(props) => {
	const projectIndex = parseInt(props.match.params.number, 10);
	console.log('projectIndex',projectIndex)

	// render(){
		return(

		<div className='row no-gutters'>
			
			<ProjectTopBanner />
			<ProblemStatement />
			<h3 className='offset-2'>Our Design</h3>
			<FeatureImgLeft />
			<FeatureImgRight />
			<FeatureImgRightBg />
			<FeatureImgCenter />
			
			<TimeLine />
		</div>

	);
	// }

}
export default CasestudyGallery;