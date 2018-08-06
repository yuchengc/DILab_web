import React from 'react';
import PeopleCard from './PeopleCard';
// import Shuffle from 'react-shuffle';
// import './case_study.css';
// import { SpringGrid } from 'react-stonecutter';
import './PeopleCardsSet.css';

const PeopleCardsSet = (props) =>{
	// console.log('on cards level',cases);
	let ft_people = [];
	let it_people = [];

	const cardRender = (cardlist) =>{
		const showedcard= cardlist.map((a,i) => {
			console.log('render',a);
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
		return showedcard
	}
	const teammatecomponent = props.people.map((a,i)=>{
		if (props.people[i].jobType === "full-time"){
			ft_people.push(a);
			// console.log("ft",ft_people);
			
		}
		else{
			it_people.push(a);
			// console.log("intern",it_people);
			
		}
		
	});
	return(
		<div className='people-cards-set'>

				{teammatecomponent}
				<div className="ft-set">
					{cardRender(ft_people)}
				</div>
				<div className="it-set">
					{cardRender(it_people)}
				</div>
		
		</div>
	);
}
export default PeopleCardsSet;
