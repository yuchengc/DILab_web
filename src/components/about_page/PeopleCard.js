import React from 'react';
import './PeopleCard.css'; 
import '../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

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
		cardClass= `people-card card-ft col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12`;
	}
	else {
		cardClass= `people-card card-it col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6`;
	}
	var profile_img=require(`${props.profilePicture}`);
	return(
		
		<li key={props.id} className={cardClass} >
			<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
				<div className='profile-picture'>
					<img src={`${profile_img}`} alt='profile'/>
				</div>
				<div className='pl-info' href='#'>
					
					<h5>{`${props.firstName} ${props.lastName}`}</h5>
					<p>{props.position}</p>
				</div>
			</ScrollAnimation>
		</li>
		
	);
}
export default PeopleCard;