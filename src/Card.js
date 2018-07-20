import './content_processpage.css'

import React from 'react';
 

const Card = (props) => {

	let selectedcard = 0;
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
		// if(index !== selectedcard){
			// document.querySelectorAll('.approach-card').forEach((card)=>{
			// 	card.classList.remove('approach-card-extend');
			// });
		// }
		var selectedcard = document.querySelector('approach-card-extend');
		console.log('old selected card', selectedcard);
		var now_selectedcard = event.target.closest('.approach-card');
		// var card_index = cardbg.classList.item(1);
		
		// console.log('index',card_index);

		if( now_selectedcard !== selectedcard){
			document.querySelectorAll('.approach-card').forEach((card)=>{
				card.classList.remove('approach-card-extend');
			});
		}else{
			now_selectedcard.classList.remove("approach-card-extend");
		}
		// console.log("click the card, target:", event.target);
		console.log("now select:", now_selectedcard);
		// now_selectedcard.classList.toggle("approach-card-extend");
		// console.log("added class");
		selectedcard=now_selectedcard.classList.item(1);
		console.log('new selected',selectedcard);
	}


	var cardClass= `approach-card card-${props.classname}`;
	return(
		<div className={cardClass} onClick={extendcard}>
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