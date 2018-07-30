import React, { Component } from 'react';
import Casestudy_gallery from './Casestudy_gallery';
import TopBanner from './TopBanner'
import './Casestudypage.css';
import {case_content} from './case_content' 
import Filter from './Filter';


class Casestudypage extends Component {
	constructor(){
		super();
		this.state = { cases: case_content, 
					   filter: 'all' }
	}
	onFilterChange = (event) => {
		// console.log(event.target.id)
		this.setState({filter : event.target.id})
		// const filteredCases = this.state.cases.filter(cases => {
		// 	return cases.calalog.includes(this.state.filter.toLowerCase())
		// })
		// console.log('on triggered event',filteredCases)
	}
	render(){
		const filteredCases = this.state.cases.filter(cases => {
			return cases.calalog.includes(this.state.filter.toLowerCase())
		})
		console.log('on render level',filteredCases)
		return(
			<div className='casestudypage-frame'>
				<TopBanner />
				<Filter filterChange={this.onFilterChange}/>
				<Casestudy_gallery case_content={filteredCases}/>
			</div>
		);
	}

}
export default Casestudypage;