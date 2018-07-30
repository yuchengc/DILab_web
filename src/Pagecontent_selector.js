import React, { Component } from 'react';
import Processpage from './components/process_page/Processpage'
import Casestudypage from './components/casestudy/Casestudypage'


class Pagecontent extends Component {

	render(){

		switch (this.props.selectedpage){
			case 0:
				return(
					<div>about us oage</div>
				);
				break;
			case 1:
				return(
					<div>

						<Processpage />
					</div>

				);
				break;
			case 2:
				return(
					<div><Casestudypage /></div>
				);
				break;
			case 3:
				return(
					<div>contact oage</div>
				);
				break;

		}
		
	}

}
export default Pagecontent;