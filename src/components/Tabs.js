import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import "./Header.css";


class Tabs extends Component{



	initialFollowme(index){
   	let leftposition= index * 10+ 'vw';
   	return( {left:leftposition});
   
  }
  handleClick(index){
    this.setState({
      selected: index
    });
    // Set the tab class based on the
    var all_items = document.querySelectorAll(".tab-item>a>span");
    all_items.forEach(function(element){
    	element.style.color="grey";
    });
    var indicator = document.querySelector(".tab-indicator");
   	var leftposition= index * 10 + 'vw'; //control the indicator's position based on the index

    indicator.style.left=leftposition;
    this.props.changeSelected(index);
    if (index===2){
      this.props.resetProjectPage(0);
    }
  }

  syncSelectedPage = (index) =>{
    //detect the url and initial the selected tab, for solving the refresh problem
    let indexTable = {
      aboutus : 0,
      process: 1,
      casestudy: 2,
      contact: 3,
    }
   
    const urlParts = window.location.href.split("/");
    const pageName = urlParts[4];
    return indexTable[pageName]
  }

  _renderTitle(){
    
    
    let initSelectedPage = this.syncSelectedPage();
    console.log('index2',this.props.selected);
    
    function labels(child, index) {
          
    // 
		var activeClass= (initSelectedPage === index ? 'tab-item-selected':'tab-item');
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
		  	return(
		  		<div className="tab-indicator" style={this.initialFollowme(initSelectedPage)}></div>
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


