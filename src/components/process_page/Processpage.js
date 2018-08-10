import './Processpage.css'

import Startgreeting from './subcomponents/Startgreeting'
import Questionnaire from './subcomponents/Questionnaire'
import Projectscope from './subcomponents/Projectscope'
import Approaches from './subcomponents/approaches/Approaches'
import Outcome from './subcomponents/Outcome'
import Futuresupport from './subcomponents/Futuresupport'
import CasestudyGallerySmall from '../casestudy/CasestudyGallerySmall'



import React, { Component } from 'react';

class Processpage extends Component {

	render(){
		return(
			<div className='processpage-frame'>
				<Startgreeting/>
				<Questionnaire/>
				<Projectscope />
				<Approaches />
				<Outcome />
				<Futuresupport />
				<CasestudyGallerySmall cases_num={4} />

			</div>
		);
	}

}
export default Processpage;