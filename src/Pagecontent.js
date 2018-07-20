import React, { Component } from 'react';
import Processpage from './Processpage'


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
					<div>case study oage</div>
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