import React, { Component } from 'react';
import ProjectTopBanner from './SharedComponents/ProjectTopBanner';
import ProblemStatement from './SharedComponents/ProblemStatement';
import FeatureImgLeft from './SharedComponents/FeatureImgLeft';
import FeatureImgRight from './SharedComponents/FeatureImgRight';
import FeatureImgLeftBg from './SharedComponents/FeatureImgLeftBg';
import FeatureImgCenter from './SharedComponents/FeatureImgCenter';
import TimeLine from './SharedComponents/TimeLine';
import TeammateList from './SharedComponents/TeammateList';
import TechSection from './SharedComponents/TechSection';
import {projectContent} from '../../../../ContentFolder/CaseStudyPage/Projects/Project1/project1_content';


const CasestudyGallery =(props) => {
	const projectIndex = parseInt(props.match.params.number, 10);
	console.log('projectIndex',projectIndex)

	// render(){
		return(

		<div className='row no-gutters'>
			
			<ProjectTopBanner 
				title={projectContent.project_name}
				introduction={projectContent.introduction}
			/>
			<ProblemStatement 
				sectionContent={projectContent.problem_statement}
			/>
			<h3 className='offset-2'>Our Design</h3>
			<FeatureImgLeft 
				sectionContent={projectContent.features[1]}
			/>
			<FeatureImgRight 
				sectionContent={projectContent.features[2]}
			/>
			<FeatureImgLeftBg 
				sectionContent={projectContent.features[3]}
				/>
			<FeatureImgCenter 
				sectionContent={projectContent.features[4]}
			/>
			
			<TimeLine 
				sectionContent={projectContent.timeline}
			/>
			<TeammateList teamlist={projectContent.member}/>
			<TechSection 
				techContent={projectContent.techStack}
				resourceContent={projectContent.resource}
			/>
		</div>

	);
	// }

}
export default CasestudyGallery;