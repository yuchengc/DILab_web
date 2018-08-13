import React, { Component } from 'react';
import LandingAnimation from './SubComponents/LandingAnimation/LandingAnimation';
import TitleAnimation from './SubComponents/TitleAnimation/TitleAnimation';
import MissionSection from './SubComponents/MissionSection/MissionSection';
import {ParallaxProvider} from 'react-scroll-parallax';
import FocusSection from './SubComponents/FocusSection/FocusSection';
import TeammateSection from './SubComponents/TeammateSection/TeammateSection';
import ConnectionUIUC from './SubComponents/ConnectionUIUC/ConnectionUIUC';
import CasestudyGallerySmall from '../CaseStudyPage/SubComponents/CasestudyGallery/CasestudyGallerySmall';
import './Aboutpage.css';

class Aboutpage extends Component {

	render(){
		return(
			<div className='aboutpage-frame'>
			<ParallaxProvider >
				<LandingAnimation />
				
				<div className="title-set">
					<div className='title-side-bar'></div>
					<TitleAnimation titleString={"DIGITAL"} />
					<TitleAnimation titleString={"INNOVATION"} />
					<TitleAnimation titleString={"LAB"} />
				</div>
				<MissionSection />
				<FocusSection />
				<TeammateSection />
				<ConnectionUIUC />
				<CasestudyGallerySmall cases_num={4} />


			</ParallaxProvider>
			</div>
		);
	}

}
export default Aboutpage;