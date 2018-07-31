import './case_study.css'

import React from 'react';
 

const Project_card = (props) => {


	// const listrender = (listitem) => {
		
	// 	const output = listitem.map((item)=>{
	// 		// console.log('item',item.name);
	// 		// console.log('item description',item.description);
	// 		return(

	// 			<li> abc
	// 				<h6>{item.name}</h6>
	// 				<p>{item.description}</p>
	// 			</li>
	// 		);
	// 	});
	// 	return output;
	// }




	var cardClass= `project-card project-card-${props.size} card-shiffle-animation`;
	var bgimage_style={background: `url(${props.backgroundimg}) no-repeat left ` , backgroundSize: 'cover',};
	// console.log(props.isd);
	// console.log(`${props.backgroundimg}`);
	return(
		<li key={props.id} projectKey={props.id} className={cardClass} style={bgimage_style} onClick={props.select_project}>
			
			<div className='info-level1' href='#'>
				<div className='cardmask'></div>
				<h5>{props.title}</h5>
				<p>{props.description}</p>
			</div>
			
		</li>
	);
}
export default Project_card;