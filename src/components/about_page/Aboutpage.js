import React, { Component } from 'react';
import LandingAnimation from './LandingAnimation';
import TitleAnimation from './TitleAnimation';
import MissionSection from './MissionSection';
import {ParallaxProvider} from 'react-scroll-parallax';
import FocusSection from './FocusSection';
import TeammateSection from './TeammateSection';
import ConnectionUIUC from './ConnectionUIUC';
import Casestudy_gallery_small from '../casestudy/Casestudy_gallery_small';
import './Aboutpage.css';

class Aboutpage extends Component {

	render(){
		return(
			<div className='aboutpage-frame'>
			<ParallaxProvider >
				<LandingAnimation />
				<div className='title-side-bar'></div>
				<div className="title-set">
					<TitleAnimation titleString={"DIGITAL"} />
					<TitleAnimation titleString={"INNOVATION"} />
					<TitleAnimation titleString={"LAB"} />
				</div>
				<MissionSection />
				<FocusSection />
				<TeammateSection />
				<ConnectionUIUC />
				<Casestudy_gallery_small cases_num={4} />


			</ParallaxProvider>
			</div>
		);
	}

}
export default Aboutpage;