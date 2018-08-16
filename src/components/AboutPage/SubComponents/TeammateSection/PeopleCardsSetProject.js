import React from 'react';
import PeopleCard from './PeopleCard';
import './PeopleCardsSetProject.css';
import {peopleContent} from '../../../../ContentFolder/AboutUsPage/peopleContent';

const PeopleCardsSetProject = (props) =>{
	let t_people = [];
	let it_people = [];

	const cardRender = (cardlist) =>{
		const showedcard= cardlist.map((a,i) => {
			return(
					
				<PeopleCard 
					index={i}
					id={a.id}
					firstName={a.firstName}
					lastName={a.lastName}
					jobType={'none'}
					position={a.position}
					profilePicture={a.profilePicture}
					
				/>
			);

		})
		return showedcard;
	}

	const projectteam = props.teamlist.map((a,i)=>{
		peopleContent.some(item => {
			if(item.id === a.member_id){
				t_people.push(item);
				return item;
			}
		})
		
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
