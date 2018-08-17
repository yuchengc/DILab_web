import './Card.css';

import React from 'react';
const Card = (props) => {
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
	const toggleCardClass =(card, btn) =>{
		card.classList.toggle("approach-card-extend");
		card.style.backgroundImage = '';

		btn.classList.toggle('btn-close-showed');
	}

	const extendcard = (event) => {
		
		var old_selectedcard_index = document.querySelector('.approach-card-extend') !== null ? document.querySelector('.approach-card-extend').classList.item(1) : 0;
		var now_selectedcard = event.target.closest('.approach-card');
		let btnClose =now_selectedcard.nextSibling;
		var now_selectedcard_index = now_selectedcard.classList.item(1);

		if( now_selectedcard_index !== old_selectedcard_index){
			document.querySelectorAll('.approach-card').forEach((card)=>{
				card.classList.remove('approach-card-extend');
			});
		}
		toggleCardClass(now_selectedcard,btnClose);
	}
	const closecard = (event) => {
		var now_selectedcard = event.target.previousSibling;
		let btnClose = event.target.closest('.btn-close');
		toggleCardClass(now_selectedcard,btnClose);
	}

	var cardClass= `approach-card card-${props.classname}`;
	return(
			<div>
			<div key={props.id} className={cardClass} onClick={extendcard.bind(this)} >
				<img className='card-bg' src={props.background} alt='bg' />
				<div className='info-level1'>
					<h5 className='title'>{props.title}</h5>
					<p>{props.purpose}</p>
				</div>
				<div className='info-level2'>
					<div className='flow-diagram'>
						<img alt='procees' src={props.flowimg}/>
					</div>
					<div className='detailedinfo '>
						<span className='inputinfo'>
							<ul><b>Needed material</b>
								{listrender(props.input)}
							</ul>
						</span>
						<span className='todoinfo '>
							<ul><b>Tasks</b>
								{listrender(props.todolist)}
							</ul>
						</span>
						<span className='deliverableinfo'>
							<ul><b>deliverables</b>
								{listrender(props.deliverable)}
							</ul>
						</span>

					</div>
				</div>
				
			</div>
			<div className='btn-close' onClick={closecard.bind(this)}></div>
			</div>
		
	);
}
export default Card;
