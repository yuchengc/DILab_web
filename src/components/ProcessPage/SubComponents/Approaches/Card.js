import './Card.css';
import flow from './images/flow.svg';

import React from 'react';
const Card = (props) => {
	const bg_image=require(`./${props.background}`);
	const listrender = (listitem) => {
		const output = listitem.map((item)=>{
			return(

				<li> abc
					<h6>{item.name}</h6>
					<p>{item.description}</p>
				</li>
			);
		});
		return output;
	}

	const extendcard = (event) => {
	
		var old_selectedcard_index = document.querySelector('.approach-card-extend') !== null ? document.querySelector('.approach-card-extend').classList.item(1) : 0;
		var now_selectedcard = event.target.closest('.approach-card');
		var now_selectedcard_index = now_selectedcard.classList.item(1);

		if( now_selectedcard_index !== old_selectedcard_index){
			document.querySelectorAll('.approach-card').forEach((card)=>{
				card.classList.remove('approach-card-extend');
			});
		}
		now_selectedcard.classList.toggle("approach-card-extend");
		now_selectedcard.style.backgroundImage = '';
	}

	var cardClass= `approach-card card-${props.classname}`;
	return(
		
			<div key={props.id} className={cardClass} onClick={extendcard.bind(this)} >
				<img className='card-bg' src={`${bg_image}`} alt='bg' />
				<div className='info-level1'>
					<h5 className='title'>{props.title}</h5>
					<p>{props.purpose}</p>
				</div>
				<div className='info-level2'>
					<div className='flow-diagram'>
						<img alt='procees' src={flow}/>
					</div>
					<div className='detailedinfo '>
						<span className='inputinfo'>
							<ul>
								{listrender(props.input)}
							</ul>
						</span>
						<span className='todoinfo '>
							<ul>
								{listrender(props.todolist)}
							</ul>
						</span>
						<span className='deliverableinfo'>
							<ul>
								{listrender(props.deliverable)}
							</ul>
						</span>

					</div>
				</div>
				<div className='btn-close'></div>
			</div>
		
	);
}
export default Card;
