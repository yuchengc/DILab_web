import React from 'react';
import './TopBanner.css';


const TopBanner = (props) =>{
	
	return(
		<div className='banner-frame col-12' style={props.item_style}>

			<div className='col-8 col-xl-8 col-lg-8 col-md-10 offset-2 offset-xl-2 offset-lg-2 offset-md-1 '>
				<div className='banner-container row align-items-center no-gutters'>
					<div className='background-section  col-4 col-xl-4 col-lg-4 col-md-4 order-2 justify-content-end'>
							<div className='cube-bg ' style={{opacity: "0"}}></div>
							<img className='casestudy-banner-img' src={props.illustration} alt='illustration'/>
						</div>
					<div className='text-section col-8 col-xl-8 col-lg-8 col-md-8 order-1'>
						
						<h3 className='greeting'>{props.title}</h3>
						<p>{props.subtitle}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default TopBanner;
