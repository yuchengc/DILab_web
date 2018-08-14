import React from 'react';
import PeopleCard from './PeopleCard';
import './PeopleCardsSetProject.css';
import {peopleContent} from '../../peopleContent';

const PeopleCardsSetProject = (props) =>{
	// console.log('on cards level',cases);
	let t_people = [];
	let it_people = [];

	const cardRender = (cardlist) =>{
		const showedcard= cardlist.map((a,i) => {
			// console.log('render',a);
			return(
					
				<PeopleCard 
					index={i}
					id={a.id}
					firstName={a.firstName}
					lastName={a.lastName}
					jobType={a.jobType}
					position={a.position}
					profilePicture={a.profilePicture}
					
				/>
			);

		})
		return showedcard;
	}

	// const teammatecomponent = props.people.map((a,i)=>{
	// 	if (props.people[i].jobType === "full-time"){
	// 		ft_people.push(a);
	// 		// console.log("ft",ft_people);
			
	// 	}
	// 	else{
	// 		it_people.push(a);
	// 		// console.log("intern",it_people);
			
	// 	}
		
	// });

	const projectteam = props.teamlist.map((a,i)=>{
		peopleContent.some(item => {
			if(item.id === a.member_id){
				// console.log(item)
				t_people.push(item);
				return item;
			}


			})
		// if (peopleContent.some(item => item.id === a.member_id)){
		// 	console.log(peopleContent.some(item => item))
		// 	return peopleContent.some(item => item)
			// t_people.push(peopleContent.some({

			// 	return 
			// }))
		// }


	});
	return(
		<div className='people-cards-set col-8 col-xl-8 col-lg-8 offset-2 offset-xl-2 offset-lg-2 no-gutters'>

				{projectteam}
				<div className="row">
					{cardRender(t_people)}
				</div>
				
		
		</div>
	);
}
export default PeopleCardsSetProject;
