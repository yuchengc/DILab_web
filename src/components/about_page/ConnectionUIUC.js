import React from 'react';
import './ConnectionUIUC.css';
import bg_img from '../../images/uiuc_bg.svg';

const ConnectionUIUC = (props) => {

	return(

		<div className='uiuc-section'>
			<img className='uiuc-img' src={bg_img} alt='UIUC illustration'/>
			<h3 className='section-title'>With UIUC</h3>
			<p >some body text about the connection with UIUC, some body text about the connection with UIUC, some body text about the connection with UIUC, some body text about the connection with UIUC</p>
		</div>
	);
}
export default ConnectionUIUC;