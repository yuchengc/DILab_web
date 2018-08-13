import React from 'react';
import './ProblemStatement.css';

const ProblemStatement =(props)=>{
	return(

		<div className='problem-frame col-12 '>
			<div className='row no-gutters'>
				<div className='col-8 offset-2'>
					<div className='row no-gutters'>
						<span className='ps-image col-6'>
							<img src='#' alt='featured screen' />
						</span>
						<span className='text-section col-6'>
							<h3>Mission / Problem statement</h3>
							<p>A short paragraph to describe problem that framers faced before. What was their solution or Was there any risk for they. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec neque at tortor aliquam maximus vitae eget lacus. Integer sollicitudin nisl nisl, ac blandit neque ornare id. Mauris mauris massa, vulputate ac egestas eget, laoreet eget nunc. Proin vel ipsum elementum massa rutrum ultricies. Vivamus egestas porta auctor. Duis blandit sed enim sed tincidunt. Etiam ac vehicula metus. Mauris sodales pharetra mauris vel scelerisque. Nam mollis purus in tortor malesuada, a pretium magna sagittis. Ut consectetur sapien odio, ut feugiat eros vestibulum a. Duis ut elit diam. Cras sit amet aliquet est, eget mattis sapien. Nulla et ultrices eros. Cras eleifend auctor fermentum. Sed vestibulum mauris non arcu rutrum, eget blandit ex commodo.</p>
						</span>
					</div>
				</div>
			</div>
		</div>

	);
}
export default ProblemStatement;