import React from 'react';
import './ProjectTopBanner.css';

const ProjectTopBanner =(props)=>{
	return(

		<div className='project-top-banner-frame col-8 offset-2'>
			<div className='row'>
			<span className='text-section col-8'>
				<h3>Project Titile</h3>
				<p>A short sentance/slogan that introduce this application</p>
			</span>
			<span className='col-4'>
				<img src='#' alt='featured screen' />
			</span>
			</div>
		</div>

	);
}
export default ProjectTopBanner;