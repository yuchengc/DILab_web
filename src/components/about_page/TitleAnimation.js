import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax';
import './TitleAnimation.css';


class TitleAnimation extends Component {
	// var stringlen= props.titleString.length();
	constructor(){
		super();
	    this.state = {
	      title_Xoffset: 0,
	      title_Yoffset: 0,
	    }
	}

	// componentDidMount(){
	// 	var chat_bf = document.querySelectorAll('.title-cht');
	// 	console.log(chat_bf);
	// 	setInterval(()=>{

	// 		chat_bf.forEach((chat)=>{chat.style.top = "0px"});
		
	// 	}, 1500)
	// }

	renderTitle(titleString){
		var outElements =[]
		// var positionY = Math.random() * 50;
		// console.log("chat-y offset",positionY);
		for (var i=0; i < titleString.length; i++){
			var offfsetY= Math.floor(Math.random() * 100);
			console.log("character",i,titleString.charAt(i))
			var offfsetY_max = offfsetY;
			var offfsetY_min = offfsetY * (-1);
			var half_positionY= offfsetY_max * 0.5;
			console.log("chat-y offset",offfsetY_max);
			
			// outElements.push(<span className={`title-cht chat-${i}`} style={{top: `${positionY}px`}}> {titleString.charAt(i)} </span>);
			outElements.push(
				<Parallax
					key={i}
					className='parallax-style title-cht'
					offsetYMax={offfsetY_max}
					offsetYmin={offfsetY_min}
					
					disabled = {true}
					// offsetXMax={20}
					// slowerScrollRate={true}

				>	
				
						<span className={`chat-back`}> {titleString.charAt(i)} </span>
						<span className={`chat-front`}> {titleString.charAt(i)} </span>
				
				</Parallax>
			);

		}
		return outElements
	}
	// const renderTitle = props.titleString.map(a,i)
	// }
	render(){
		return(
			<div className="title-word">
				{this.renderTitle(this.props.titleString)}
			</div>
		);

	}
	

}

export default TitleAnimation;