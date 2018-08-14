import React from 'react';
import './TimeLine.css';

const TimeLine =(props)=>{


	
	return(

		<div className='time-line-frame col-12 '>
			<div className='row no-gutters'>
				<div className='col-8 offset-2'>
					<div className='flow'>
						<span className="line"></span>
						<span className='sprint sprint-1'>
							<span className='back'></span>
							<span className='front'>sprint 1</span>
						</span>
						<span className='sprint sprint-2'>
							<span className='back'></span>
							<span className='front'>sprint 2</span>
						</span>
						<span className='sprint sprint-3'>
							<span className='back'></span>
							<span className='front'>sprint 3</span>
						</span>
						<span className='sprint sprint-4'>
							<span className='back'></span>
							<span className='front'>sprint 4</span>
						</span>
						<span className='sprint sprint-5'>
							<span className='back'></span>
							<span className='front'>sprint 5</span>
						</span>
						
					</div>
					<div className='content-section row no-gutters'>
						<div className='section-line line-top'></div>
						<div className='text-container row'>
							<div className="task col-6">
								<div className='title'>Design</div>
								<div className='description'>Fusce nec arcu nec augue tempor ultrices. Quisque tempor quam massa, non sodales urna aliquam interdum. In hac habitasse platea dictumst. Nunc vulputate purus a erat tempus, sed finibus arcu vulputate. Integer sit amet ornare velit. Mauris non aliquet odio, id porta felis. Donec id tellus eleifend, gravida nulla sit amet, condimentum quam.</div>
							</div>
							<div className="task col-6">
								<div className='title'>Design</div>
								<div className='description'>Fusce nec arcu nec augue tempor ultrices. Quisque tempor quam massa, non sodales urna aliquam interdum. In hac habitasse platea dictumst. Nunc vulputate purus a erat tempus, sed finibus arcu vulputate. Integer sit amet ornare velit. Mauris non aliquet odio, id porta felis. Donec id tellus eleifend, gravida nulla sit amet, condimentum quam.</div>
							</div>
							<div className="task col-6 ">
								<div className='title'>Design</div>
								<div className='description'>Fusce nec arcu nec augue tempor ultrices. Quisque tempor quam massa, non sodales urna aliquam interdum. In hac habitasse platea dictumst. Nunc vulputate purus a erat tempus, sed finibus arcu vulputate. Integer sit amet ornare velit. Mauris non aliquet odio, id porta felis. Donec id tellus eleifend, gravida nulla sit amet, condimentum quam.</div>
							</div>
							<div className="task col-6">
								<div className='title'>Design</div>
								<div className='description'>Fusce nec arcu nec augue tempor ultrices. Quisque tempor quam massa, non sodales urna aliquam interdum. In hac habitasse platea dictumst. Nunc vulputate purus a erat tempus, sed finibus arcu vulputate. Integer sit amet ornare velit. Mauris non aliquet odio, id porta felis. Donec id tellus eleifend, gravida nulla sit amet, condimentum quam.</div>
							</div>

						</div>
						<div className='section-line line-bottom'></div>
					</div>
				</div>
			</div>
		</div>

	);
}
export default TimeLine;