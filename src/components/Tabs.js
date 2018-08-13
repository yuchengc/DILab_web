import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import "./Header.css";


class Tabs extends Component{

	initialFollowme(index){
  	// var indicator = document.querySelector(".tab-indicator");

   	var leftposition= index * 10+ 'vw';
   	return( {left:leftposition});
    // indicator.style.left=leftposition;
    // this.props.changeSelected(index);
  }
  handleClick(index){
 
    // event.preventDefault();
    this.setState({
      selected: index
    });
    // console.log(event.target);
    // Set the tab class based on the
    var all_items = document.querySelectorAll(".tab-item>a>span");
    all_items.forEach(function(element){
    	element.style.color="grey";
    });
    var indicator = document.querySelector(".tab-indicator");
    // console.log('indicator',indicator);
   	var leftposition= index * 10 + 'vw'; //control the indicator's position based on the index

    indicator.style.left=leftposition;
    this.props.changeSelected(index);
    // console.log("update app level state",);
    if (index===2){
      this.props.resetProjectPage(0);
    }
  }
  

  _renderTitle(){
    

    function labels(child, index) {
		var activeClass= (this.props.selected === index ? 'tab-item-selected':'tab-item');
		// console.log("child.type.name", child.type.name);
			// if ()
			if(child.type.name === "Pane"){
	    return (
            <NavLink to={`/${child.props.label.replace(/ /g,'').toLowerCase()}`}
              // isActive={this.handleClick}
              id={index}
              onClick={this.handleClick.bind(this, index)}
              > 
                <li key={index} className={activeClass} >
                <span>{child.props.label}</span>
                </li>
            </NavLink>
	      );
	    
		  }
		  if(child.props.className === "tab-indicator"){
		  	// this.followme(this.props.selected);
		  	return(
		  		<div className="tab-indicator" style={this.initialFollowme(this.props.selected)}></div>
	  		);
		  }
		  
    }
    return(
      <ul className="tabs_labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }
  
  render(){
    return (
      <div className = 'tabs'>
        {this._renderTitle()}
        

      </div>
    )
  }
}
export default Tabs;


