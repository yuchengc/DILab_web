import React, { Component } from 'react';
import TopBanner from '../sharedcomponents/TopBanner'

class ContactPage extends Component {

	render(){
		return(
			<div className='aboutpage-frame row no-gutters'>
				<TopBanner 
					item_style={{background:'linear-gradient(-80deg , #52E1C2, #70E598)'}}
					title='WANT TO CONTACT US?'
					subtitle='We focus on Web , mobile app design and development. here are some awesome works.'
				/>
			</div>
		);
	}

}
export default ContactPage;