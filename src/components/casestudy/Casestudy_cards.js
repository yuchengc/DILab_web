import React from 'react';
import Project_card from './Project_card';
// import Shuffle from 'react-shuffle';
import './case_study.css';
import { SpringGrid } from 'react-stonecutter';

const CaseCards_small = (props) =>{
	// console.log('on cards level',cases);
	const casestudycomponent = props.cases.map((a,i)=>{
		
		return(
			
			<Project_card 
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
		<div className={`case-cards-${props.size}`}>

				{casestudycomponent}
		
		</div>
	);
}
export default CaseCards_small;

			// <Shuffle duration={500} fade={false}>
			// 	{casestudycomponent}
			// </Shuffle>