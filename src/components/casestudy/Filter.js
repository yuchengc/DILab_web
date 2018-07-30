import React, { Component } from 'react';
import './Filter.css'


class Filter extends Component{
	// changefilter => (filter){

	// } 
	// handleFilter (){

	// } 

	render(){
		return(
			<div className='filter'>
				<div>Filter </div>
				<span className='filter-item all' id='all' onClick={this.props.filterChange} >All</span>
				<span className='filter-item web' id='web' onClick={this.props.filterChange} >Web</span>
				<span className='filter-item mobile' id='mobile' onClick={this.props.filterChange} >Mobile App</span>
				<span className='filter-item ux' id='ux' onClick={this.props.filterChange} >UX Research</span>
				<span className='filter-item bsns' id='bsns' onClick={this.props.filterChange} >Business Strategy</span>
			</div>
			);
	}
}
export default Filter;