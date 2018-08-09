import React from 'react';
import './TopBanner.css';
import casestudy_banner from '../../images/casestudy_banner.svg';

const TopBanner = () =>{
	
	return(
		<div className='col-8 col-xl-8 col-lg-8 col-md-10 offset-2 offset-xl-2 offset-lg-2 offset-md-1 '>
			<div className='banner-container row align-items-center no-gutters'>
				<div className='background-section  col-4 col-xl-4 col-lg-4 col-md-4 order-2 justify-content-end'>
						<div className='cube-bg '></div>
						<img className='casestudy-banner-img' src={casestudy_banner} alt='interfaces'/>
					</div>
				<div className='text-section col-8 col-xl-8 col-lg-8 col-md-8 order-1'>
					
					<h3 className='greeting'>Take a look at our works</h3>
					<p>We focus on Web , mobile app design and development. here are some awesome works.</p>
				</div>
			</div>
		</div>
	);
}
export default TopBanner;
