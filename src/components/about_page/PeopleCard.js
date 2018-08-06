import React from 'react';
import './PeopleCard.css'; 

const PeopleCard = (props) => {


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




	
	// var bgimage_style={background: `url(${props.backgroundimg}) no-repeat left ` , backgroundSize: 'cover',};
	// console.log(props.isd);
	// console.log(`${props.backgroundimg}`);
	var cardClass= ``;
	if (props.jobType === 'full-time') {
		cardClass= `people-card card-ft`;
	}
	else {
		var cardClass= `people-card card-it`;
	}
	var profile_img=require(`${props.profilePicture}`);
	return(
		<li key={props.id} className={cardClass} >
			<div className='profile-picture'>
				<img src={`${profile_img}`} alt='profile picture'/>
			</div>
			<div className='pl-info' href='#'>
				
				<h5>{`${props.firstName} ${props.lastName}`}</h5>
				<p>{props.position}</p>
			</div>
			
		</li>
	);
}
export default PeopleCard;