import './Processpage.css'

import Startgreeting from './Startgreeting'
import Questionnaire from './Questionnaire'
import Projectscope from './Projectscope'
import Approaches from './approaches/Approaches'
import Outcome from './Outcome'
import Futuresupport from './Futuresupport'
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