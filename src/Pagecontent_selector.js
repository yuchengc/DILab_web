import React, { Component } from 'react';
import Processpage from './components/process_page/Processpage'
import Casestudy_gallery from './components/casestudy/Casestudy_gallery'


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
					<div><Casestudy_gallery /></div>
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