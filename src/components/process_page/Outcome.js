import React from 'react';
import './Outcome.css';
import outcome from '../../images/outcome.png';
// import Card from './Card';

const Outcome = () =>{
	
	return(
		<div className='work-process-outcome'>
			
			<div className='content-section'>
				
				<div className='paragraph-section'>
					<h3>Minimum Viable Product</h3>
					<h5>(Need rephrase) Delivery of a basic working version of the product with enough features to be launched with real users and integrated with SYT systems​</h5>

					<ul>
						Some Questions we might ask:
						<li>Question 1, what is your business goal?</li>
						<li>Question 2, Who is the target user? What problem you want to solve?</li>
						<li>Question 3, What is your project plan?</li>
					</ul>
				</div>

				

			</div>
			<img src={outcome} alt='bg'/>
			

		</div>
	);
}
export default Outcome;