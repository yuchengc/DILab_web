import React from 'react';
import './FeatureImg.css';
import imgExample from '../../../../../images/screen_mockup_highlight.png';
import '../../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const FeatureImgLeft =(props)=>{
	return(

		<div className='feature-frame col-8 offset-2'>
			<div className='row'>
			<span className='text-section col-8'>
				<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<h3>Feature one</h3>
					<p>Vivamus pretium, sem a accumsan venenatis, leo lacus finibus ex, vel iaculis lorem libero vel arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus id pharetra tellus, ut luctus nisl. Nulla porttitor blandit augue a ullamcorper. Cras a iaculis velit. Etiam a risus sit amet felis gravida gravida. Nam eu semper enim, at ultricies tellus. Nunc vel pulvinar eros. Phasellus pharetra ultricies pretium. In neque massa, commodo ut euismod in, fringilla a libero. Suspendisse aliquet convallis tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut mattis nisi a gravida ullamcorper.</p>
				</ScrollAnimation>
			</span>
			<span className='col-4'>
				<ScrollAnimation animateIn="fadeInRight" offset={200} duration={0.8} animateOnce={true} delay={0} >
					<img src={imgExample} alt='featured screen' />
				</ScrollAnimation>
			</span>
			</div>
		</div>

	);
}
export default FeatureImgLeft;