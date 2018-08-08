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
		<div className='people-cards-set col-8 col-xl-8 col-lg-8 offset-2 offset-xl-2 offset-lg-2 no-gutters'>

				{teammatecomponent}
				<div className="ft-set row">
					{cardRender(ft_people)}
				</div>
				<div className="it-set row ">
					{cardRender(it_people)}
				</div>
		
		</div>
	);
}
export default PeopleCardsSet;