import './Project_card.css'

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




	// var cardClass= `project-card project-card-${props.size} card-shiffle-animation col-12 col-xl-4 col-lg-4 col-ms-6 col-ms-12`;
	var cardClass= `card-frame card-shiffle-animation col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12`;
	var bgimage_style={background: `url(${props.backgroundimg}) no-repeat left ` , backgroundSize: 'cover',};
	if (props.size==='sm'){
		var cardClass= `card-frame card-shiffle-animation col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6`;
	}
	// console.log(props.isd);
	// console.log(`${props.backgroundimg}`);
	return(
		<li key={props.id} projectKey={props.id} className={cardClass}  onClick={props.select_project}>
			<div className='project-card' style={bgimage_style}>
			<div className='info-level1' href='#'>
				<div className='cardmask'></div>
				<h5>{props.title}</h5>
				<p>{props.description}</p>
			</div>
			</div>
		</li>
	);
}
export default Project_card;