import './ProjectCard.css'
import React from 'react';
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
	var cardClass= `card-frame card-shiffle-animation col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12`;
	var bgimage_style={background: `url(${props.backgroundimg}) no-repeat left ` , backgroundSize: 'cover',};
	if (props.size==='sm'){
		cardClass= `card-frame card-shiffle-animation col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6`;
	}
	return(
		<li key={props.id} projectkey={props.id} className={cardClass}  onClick={props.select_project}>
			<Link to={`/casestudy/${props.id}`}>
				<div className='project-card' style={bgimage_style}>
				<div className='info-level1' href='#'>
					<div className='cardmask'></div>
					<h5>{props.title}</h5>
					<p>{props.description}</p>
				</div>
				</div>
			</Link>
		</li>
	);
}
export default ProjectCard;