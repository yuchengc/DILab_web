import React from 'react';
import './ProjectTopBanner.css';
import iphonemockup from '../../../../../images/iPhoneMockup.png';


const ProjectTopBanner =(props)=>{
	return(

		<div className='project-top-banner-frame col-8 offset-2'>
			<div className='row align-items-center'>
			<span className='text-section col-8'>
				<h3>Project Titile</h3>
				<p>A short sentance/slogan that introduce this application</p>
			</span>
			<span className='project-mockup col-4'>
				<img src={iphonemockup} alt='featured screen' />
			</span>
			</div>
		</div>

	);
}
export default ProjectTopBanner;