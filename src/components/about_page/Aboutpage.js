import React, { Component } from 'react';
import LandingAnimation from './LandingAnimation';
import TitleAnimation from './TitleAnimation';
import {ParallaxProvider} from 'react-scroll-parallax';
import './Aboutpage.css'

class Aboutpage extends Component {

	render(){
		return(
			<div className='aboutpage-frame'>
			<ParallaxProvider >
				<LandingAnimation />
				<div className="title-set">
					<TitleAnimation titleString={"DIGITAL"} />
					<TitleAnimation titleString={"INNOVATION"} />
					<TitleAnimation titleString={"LAB"} />
				</div>
				<div className="mission-section"></div>

			</ParallaxProvider>
			</div>
		);
	}

}
export default Aboutpage;