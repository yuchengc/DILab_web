import React from 'react';
import Project_card from './Project_card';

import './case_study.css'

const CaseCards_small = ({cases}) =>{
	const casestudycomponent = cases.map((a,i)=>{
		
		return(
			<Project_card id={cases[i].id}
				title={cases[i].project_name}
				description={cases[i].description}
				date={cases[i].date}
				backgroundimg={cases[i].bgimage}

			/>

		);
	});
	return(
		<div className="case-cards">
			{casestudycomponent}
		</div>
	);
}
export default CaseCards_small;