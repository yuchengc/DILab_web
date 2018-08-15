import React from 'react';
import './FeatureImg.css';
import imgExample from '../../../../../images/screen_mockup_highlight.png';
import './TechSection.css';
import '../../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

// import FontAwesome from 'react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
// library.add(faStroopwafel)



const TechSection = (props)=>{


	console.log(props)
	const renderStackItem = props.techContent.map((itemlist) => {
		return (
			
			<div className='tech-item col-6' key={itemlist.id}>
				<p>{itemlist.kind}</p>
				<h5>{itemlist.content}</h5>
			</div>
			
		);

	});
	
	const renderResourceItem = props.resourceContent.map((itemlist) => {
		return (
			
			<div className='reso-item col-12' key={itemlist.file_id}>
				<div className='row item-box align-items-center'>
					<i className="icon fas fa-file-pdf col-1" style={{fontSize:'2rem', color: '#555555'}}></i>
					<p className='col-10'>{itemlist.fileName}</p>
				</div>
			</div>
			
		);

	});


	return(
		<div className='row'>
			<div className='decoration'>
				<div className='object-1'></div>
				<div className='object-2'></div>
			</div>
			<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
			<div className='tech-frame col-8 offset-2'>
				
				<div className='row'>
					<span className='tech-stack-frame col-8'>
						<h3>Tech Stack</h3>
						<div className='row'>
						{renderStackItem}
						</div>
					</span>
					<span className='resource-frame col-4'>
						<h3>Resource</h3>
						<div className='row'>
						{renderResourceItem}
						</div>
					</span>
				</div>
			</div>
			</ScrollAnimation>
		</div>

	);
}
export default TechSection;