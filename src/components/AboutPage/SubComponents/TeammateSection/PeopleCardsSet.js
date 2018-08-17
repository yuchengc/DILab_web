import React from 'react';
import PeopleCard from './PeopleCard';
import './PeopleCardsSet.css';

const PeopleCardsSet = (props) =>{
	let ft_people = [];
	let it_people = [];

	const cardRender = (cardlist) =>{
		const showedcard= cardlist.map((a,i) => {
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

	const teammatecomponent = props.people.map((a,i)=>{
		if (props.people[i].jobType === "full-time"){
			ft_people.push(a);
		}
		else{
			it_people.push(a);
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
