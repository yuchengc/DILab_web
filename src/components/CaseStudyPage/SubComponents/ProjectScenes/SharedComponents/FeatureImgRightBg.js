import React from 'react';
import './FeatureImg.css';
import './FeatureImgRightBg.css';
import iphonemockup from '../../../../../images/iPhoneMockup.png';

const FeatureImgRightBg =(props)=>{
	return(

		<div className='feature-frame  col-8 offset-2'>
			<div className='row'>
			<span className='screen-mockup col-4'>
				<img src={iphonemockup} alt='featured screen' />
			</span>
			<span className='text-section grey-bg col-8'>
				<h3>Feature one</h3>
				<p>Vivamus pretium, sem a accumsan venenatis, leo lacus finibus ex, vel iaculis lorem libero vel arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus id pharetra tellus, ut luctus nisl. Nulla porttitor blandit augue a ullamcorper. Cras a iaculis velit. Etiam a risus sit amet felis gravida gravida. Nam eu semper enim, at ultricies tellus. Nunc vel pulvinar eros. Phasellus pharetra ultricies pretium. In neque massa, commodo ut euismod in, fringilla a libero. Suspendisse aliquet convallis tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut mattis nisi a gravida ullamcorper.</p>
			</span>
			
			</div>
		</div>

	);
}
export default FeatureImgRightBg;