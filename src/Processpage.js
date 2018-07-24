import './content_processpage.css'

import Startgreeting from './Startgreeting/Startgreeting'
import Questionnaire from './Questionnaire/Questionnaire'
import Projectscope from './Projectscope/Projectscope'
import Approaches from './approaches/Approaches'
import Outcome from './Outcome/Outcome'
import Futuresupport from './Futuresupport'
import Casestudy_gallery_small from './components/casestudy/Casestudy_gallery_small'



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
				<Casestudy_gallery_small />

			</div>
		);
	}

}
export default Processpage;