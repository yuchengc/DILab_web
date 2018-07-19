import React from 'react';
import Card from './Card';

const ApproachCards = ({approaches}) =>{
	const approachcomponent = approaches.map((a,i)=>{
		return(
			<Card id={approaches[i].id}
				title={approaches[i].title}
				purpose={approaches[i].purpose}
				input={approaches[i].input}
				processfigure={approaches[i].processfigure}

			/>

		);
	});
	return(
		<div className="approaches-cards">
			{approachcomponent}
		</div>
	);
}
export default ApproachCards;