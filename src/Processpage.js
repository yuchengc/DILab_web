import './content_processpage.css'
import Approachcards from './Approachcards'
import Startgreeting from './Startgreeting'
import Questionnaire from './Questionnaire'
import Projectscope from './Projectscope'

import {approaches} from './approaches' 


import React, { Component } from 'react';

class Processpage extends Component {

	render(){
		return(
			<div className='processpage-frame'>
				<Startgreeting/>
				<Questionnaire/>
				<Projectscope />
				<div>Greeting 1</div>
				<div>Greeting 1</div>
				<div className='approaches'>
					<Approachcards approaches={approaches}/>
				</div>
			</div>
		);
	}

}
export default Processpage;