import React from 'react';
import './TimeLine.css';

const TimeLine =(props)=>{
	return(

		<div className='time-line-frame col-12 '>
			<div className='row no-gutters'>
				<div className='col-8 offset-2'>
					<div className='flow'>
						<span className='sprint sprint-1'>sprint 1</span>
						<span className='sprint sprint-2'>sprint 2</span>
						<span className='sprint sprint-3'>sprint 3</span>
						<span className='sprint sprint-4'>sprint 4</span>
						<span className='sprint sprint-5'>sprint 5</span>
					</div>
				</div>
			</div>
		</div>

	);
}
export default TimeLine;