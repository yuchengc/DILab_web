import React from 'react';
import './content_processpage.css'
// import Card from './Card';

const Questionnaire = () =>{
	
	return(
		<div className='work-process-ques'>
			<div className='content-section'>
				<img src='#' alt='bg'/>
				<div className='paragraph-section'>
					<h3>Help us understand your goal</h3>
					<h5>A short sentence that describes this step. A short sentence that describes this step. A short sentence that describes this step.</h5>

					<ul>
						Some Questions we might ask:
						<li>Question 1, what is your business goal?</li>
						<li>Question 2, Who is the target user? What problem you want to solve?</li>
						<li>Question 3, What is your project plan?</li>
					</ul>
				</div>
				<div className='button-set'>
					<button type='button'>DOWNLOAD THE QUESTIONNAIRE</button>
					<button type='button'>CONTACT US</button>
				</div>
				

			</div>
			<div className='scroll-indicator-right'>
				<span className='side-caption-right'>BRING YOUR IDEA HERE !</span>
			</div>

		</div>
	);
}
export default Questionnaire;