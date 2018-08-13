import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

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
