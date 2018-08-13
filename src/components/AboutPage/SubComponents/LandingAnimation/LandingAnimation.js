import React from 'react';
import './LandingAnimation.css';
import  landing  from '../../../../images/landing.svg';

const LandingAnimation =()=>{
	return(
		<div>
			<div className='svg-frame'>

				<img src={landing} alt='svg animation'/>
			</div>
		</div>
	);

}

export default LandingAnimation;