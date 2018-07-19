import './content_processpage.css'
import Approachcards from './Approachcards'
import {approaches} from './approaches' 


import React, { Component } from 'react';

class Processpage extends Component {

	render(){
		return(
			
			<div className='approaches'>
				<Approachcards approaches={approaches}/>
			</div>
		);
	}

}
export default Processpage;