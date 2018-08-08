import React from 'react';
import './ConnectionUIUC.css';
import bg_img from '../../images/uiuc_bg.svg';

const ConnectionUIUC = (props) => {

	return(

		<div className='uiuc-section row no-gutters align-items-center align-self-center'>
			<img className='uiuc-img' src={bg_img} alt='UIUC illustration'/>
			<h3 className='section-title col-6 offset-3 '>With UIUC</h3>
			<p >some body text about the connection with UIUC, some body text about the connection with UIUC, some body text about the connection with UIUC, some body text about the connection with UIUC</p>
		</div>
	);
}
export default ConnectionUIUC;