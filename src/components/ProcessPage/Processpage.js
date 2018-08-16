import './Processpage.css'

import StartGreeting from './SubComponents/StartGreeting/StartGreeting'
import Questionnaire from './SubComponents/Questionnaire/Questionnaire'
import ProjectScope from './SubComponents/ProjectScope/ProjectScope'
import Approaches from './SubComponents/Approaches/Approaches'
import OutCome from './SubComponents/OutCome/OutCome'
import FutureSupport from './SubComponents/FutureSupport/FutureSupport'
import CasestudyGallerySmall from '../CaseStudyPage/SubComponents/CasestudyGallery/CasestudyGallerySmall';
import {processContent} from '../../ContentFolder/ProcessPage/processContent';
import {approachesContent} from '../../ContentFolder/ProcessPage/approachesContent';



import React, { Component } from 'react';

class Processpage extends Component {

	render(){
		return(
			<div className='processpage-frame'>
				<StartGreeting sectionContent={processContent.startGreeting}/>
				<Questionnaire sectionContent={processContent.questionnaire}/>
				<ProjectScope sectionContent={processContent.projectScope}/>
				<Approaches sectionContent={processContent.approaches} approachContent={approachesContent}/>
				<OutCome sectionContent={processContent.outCome}/>
				<FutureSupport />
				<CasestudyGallerySmall cases_num={4} />

			</div>
		);
	}

}
export default Processpage;