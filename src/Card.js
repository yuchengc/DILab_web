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
		var cardbg = event.target.closest('.approach-card');
		// console.log("click the card, target:", event.target);
		// console.log("click the card, select:", cardbg);
		cardbg.classList.toggle("approach-card-extend");
		console.log("added class");

	}


	// var cardClass= ( props.title === index ? 'tab-item-selected':'tab-item');
	return(
		<div className='approach-card' onClick={extendcard}>
			<div className='info-level1'>
				<h5>{props.title}</h5>
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