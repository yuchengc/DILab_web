import React from 'react';
import './TopBanner.css';
import casestudy_banner from '../../images/casestudy_banner.svg';

const TopBanner = () =>{
	
	return(
		<div className='banner-container'>
			<div className='text-section'>
				<div>
					<img scr={casestudy_banner} alt='interfaces'/>
					<div className='cube-bg'></div>
				</div>
				<h3 className='greeting'>Take a look at our works</h3>
				<p>We focus on Web , mobile app design and development. here are some awesome works.</p>
			</div>
			
		</div>
	);
}
export default TopBanner;
