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




	var cardClass= 'project-card';
	var bgimage_style={background: `url(${props.backgroundimg}) no-repeat left ` , backgroundSize: 'cover',};
	// console.log(`${props.backgroundimg}`);
	return(
		<div className={cardClass} style={bgimage_style}>
			<div className='cardmask'></div>
			<div className='info-level1' >
				<h5>{props.title}</h5>
				<p>{props.description}</p>
			</div>
			
		</div>
	);
}
export default Project_card;