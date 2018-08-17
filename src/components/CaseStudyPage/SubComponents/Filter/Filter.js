import React, { Component } from 'react';
import './Filter.css'


class Filter extends Component{
	render(){
		return(
			<div className='filter col-8 col-xl-8 col-lg-8 col-md-10 offset-2 offset-xl-2 offset-lg-2 offset-md-1 '>
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