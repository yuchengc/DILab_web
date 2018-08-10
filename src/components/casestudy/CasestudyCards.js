import React from 'react';
import ProjectCard from './ProjectCard';

const CaseCardsSmall = (props) =>{
	// console.log('on cards level',cases);
	const casestudycomponent = props.cases.map((a,i)=>{
		
		return(
			
			<ProjectCard 
				index={i}
				id={props.cases[i].case_id}
				title={props.cases[i].project_name}
				description={props.cases[i].description}
				date={props.cases[i].date}
				backgroundimg={props.cases[i].bgimage}
				size={props.size}
				select_project={props.select_project}
			/>
			
			

		);
	});
	return(
		<div className='row'>
			
				{casestudycomponent}
			
		</div>
	);
}
export default CaseCardsSmall;

			// <Shuffle duration={500} fade={false}>
			// 	{casestudycomponent}
			// </Shuffle>
			//<div className={`case-cards-${props.size} col-12 col-xl-8 col-lg-8 col-md-10 col-sm-12`}>