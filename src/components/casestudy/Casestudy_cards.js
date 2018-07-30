import React from 'react';
import Project_card from './Project_card';
// import Shuffle from 'react-shuffle';
import './case_study.css';

const CaseCards_small = ({cases, size}) =>{
	console.log('on cards level',cases);
	const casestudycomponent = cases.map((a,i)=>{
		
		return(
			<Project_card id={cases[i].id}
				title={cases[i].project_name}
				description={cases[i].description}
				date={cases[i].date}
				backgroundimg={cases[i].bgimage}
				size={size}
			/>

		);
	});
	return(
		<div className={`case-cards-${size}`}>
			
				{casestudycomponent}
			
		</div>
	);
}
export default CaseCards_small;

			// <Shuffle duration={500} fade={false}>
			// 	{casestudycomponent}
			// </Shuffle>