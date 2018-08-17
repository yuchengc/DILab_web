import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax';
import './TitleAnimation.css';


class TitleAnimation extends Component {
	constructor(){
		super();
	    this.state = {
	      title_Xoffset: 0,
	      title_Yoffset: 0,
	    }
	}
	renderTitle(titleString){
		var outElements =[]
		for (var i=0; i < titleString.length; i++){
			var offfsetY= Math.floor(Math.random() * 100);
			var offfsetY_max = offfsetY;
			var offfsetY_min = offfsetY * (-1);
			outElements.push(
				<Parallax
					key={i}
					className='parallax-style title-cht'
					offsetYMax={offfsetY_max}
					offsetYmin={offfsetY_min}
					disabled = {true}
				>	
					<span className={`chat-back`}> {titleString.charAt(i)} </span>
					<span className={`chat-front`}> {titleString.charAt(i)} </span>
				
				</Parallax>
			);

		}
		return outElements
	}
	render(){
		return(
			<div className="title-word">
				{this.renderTitle(this.props.titleString)}
			</div>
		);
	}
}

export default TitleAnimation;