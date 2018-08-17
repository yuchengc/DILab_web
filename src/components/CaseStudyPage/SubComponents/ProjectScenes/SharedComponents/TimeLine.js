import React, { Component } from 'react';
import './TimeLine.css';
import '../../../../../style_global/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


class TimeLine extends Component{

	constructor(props){
		super(props);
		this.state = { selectedSprint: 1, 
					 }
	}
	generateFlowTitle = (sectionContent) => {
		const sprintList = sectionContent.map((a,i) => {
				return(
					<span className={i===0?'sprint sprint-1 sprint-active':'sprint sprint-1'} sKey={a.sprint_id} onMouseOver={this.handleMouseOver}>
						<span className='back'></span>
						<span className='front'>{`sprint ${a.sprint_id}`}</span>
					</span>
				);
			}
		);
		return(
			
			<div className='flow'>
				<span className="line"></span>
					{sprintList}
			</div>
		);
		
	}
	generateTask = (sprint) => {
		const taskContent = sprint.content.map((item) => {
			return (
				<div className="task col-6">
					<div className='title'>{item.taskName}</div>
					<div className='description'>{item.taskContent}</div>
				</div>
			)

		});
		return taskContent;
	}
	generateContent = () =>{
		const sprintDetail = this.props.sectionContent.map((a,i)=>{
			if (a.sprint_id === this.state.selectedSprint) {
				return this.generateTask(a);
			}
		});
		return(
			<div className='content-section row no-gutters'>
				<div className='section-line line-top'></div>
				<div className='text-container row'>
					{sprintDetail}

				</div>
				<div className='section-line line-bottom'></div>
			</div>

		)
	}
	handleMouseOver = (event) => {
		let selectItem = event.target.closest('.sprint');
		let selectItem_index = selectItem.getAttribute('sKey');
		let allSibling = selectItem.parentNode.childNodes;
		for (var i=1; i<allSibling.length; i++){
			if (i !== parseInt(selectItem_index)){
				allSibling[i].classList.remove('sprint-active');
			}
			
		}
		this.setState({selectedSprint : parseInt(selectItem_index)})
		selectItem.classList.add('sprint-active');

	}

	render(){
		return(

			<div className='time-line-frame col-12 '>
				<div className='row no-gutters'>
				
					<div className='col-8 offset-2'>
						<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
							{this.generateFlowTitle(this.props.sectionContent)}
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp" offset={200} duration={0.8} animateOnce={true} delay={0} >
							{this.generateContent()}
						</ScrollAnimation>
					</div>
					
				</div>
			</div>

		);
	}
}
export default TimeLine;
