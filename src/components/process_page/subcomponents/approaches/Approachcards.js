import React from 'react';
import Card from './Card';
import './Approachcards.css';

const ApproachCards = ({approaches}) =>{
	const approachcomponent = approaches.map((a,i)=>{
		return(
			<Card id={approaches[i].id}
				classname={approaches[i].classname}
				title={approaches[i].title}
				purpose={approaches[i].purpose}
				input={approaches[i].input}
				processfigure={approaches[i].processfigure}
				background={approaches[i].background}

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