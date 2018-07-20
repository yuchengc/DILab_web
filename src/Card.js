import './content_processpage.css'

import React from 'react';
 

const Card = (props) => {


	const listrender = (listitem) => {
		
		const output = listitem.map((item)=>{
			// console.log('item',item.name);
			// console.log('item description',item.description);
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

		// console.log('old selected card', old_selectedcard_index);
		var now_selectedcard = event.target.closest('.approach-card');
		var now_selectedcard_index = now_selectedcard.classList.item(1);
		
		// console.log('index',card_index);

		if( now_selectedcard_index !== old_selectedcard_index){
			// console.log('now_selectedcard',now_selectedcard_index, 'old crad', old_selectedcard_index);
			document.querySelectorAll('.approach-card').forEach((card)=>{
				card.classList.remove('approach-card-extend');
			});
		}
		// console.log("click the card, target:", event.target);
		// console.log("now select:", now_selectedcard);
		now_selectedcard.classList.toggle("approach-card-extend");
		
	}


	var cardClass= `approach-card card-${props.classname}`;
	return(
		<div className={cardClass} onClick={extendcard.bind(this)}>
			<div className='info-level1'>
				<h5 className='title'>{props.title}</h5>
				<p>{props.purpose}</p>
			</div>
			<div className='info-level2'>
				<div>
					<img alt='procees' src={props.processfigure}/>
				</div>
				<div className='detailedinfo'>
					<span className='inputinfo'>
						<ul>
							{listrender(props.input)}
						</ul>
					</span>
					<span className='todoinfo'></span>
					<span className='deliverableinfo'></span>

				</div>
			</div>
		</div>
	);
}
export default Card;