import './Processpage.css'

import StartGreeting from './SubComponents/StartGreeting/StartGreeting'
import Questionnaire from './SubComponents/Questionnaire/Questionnaire'
import ProjectScope from './SubComponents/ProjectScope/ProjectScope'
import Approaches from './SubComponents/Approaches/Approaches'
import OutCome from './SubComponents/OutCome/OutCome'
import FutureSupport from './SubComponents/FutureSupport/FutureSupport'
import CasestudyGallerySmall from '../CaseStudyPage/SubComponents/CasestudyGallery/CasestudyGallerySmall'



import React, { Component } from 'react';

class Processpage extends Component {

	render(){
		return(
			<div className='processpage-frame'>
				<StartGreeting/>
				<Questionnaire/>
				<ProjectScope />
				<Approaches />
				<OutCome />
				<FutureSupport />
				<CasestudyGallerySmall cases_num={4} />

			</div>
		);
	}

}
export default Processpage;