import React, { Component } from 'react';


import "./Header.css";


class Tabs extends Component{

	initialFollowme(index){
  	// var indicator = document.querySelector(".tab-indicator");

   	var leftposition= index * 10+ 'vw';
   	return( {left:leftposition});
    // indicator.style.left=leftposition;
    // this.props.changeSelected(index);
  }
  handleClick(index, event){
    event.preventDefault();
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

   	var leftposition= index * 10 + 'vw';

    indicator.style.left=leftposition;
    this.props.changeSelected(index);
    // console.log("update app level state",);
    if (index===2){
      this.props.resetProjectPage(0);
    }

  }
  

  _renderTitle(){
    // console.log("Tab level",this.props.selected);
    // console.log(this.props.children);

    function labels(child, index) {
		var activeClass= (this.props.selected === index ? 'tab-item-selected':'tab-item');
		// console.log("child.type.name", child.type.name);
			// if ()
			if(child.type.name === "Pane"){
	    return (
	    	
	        <li key={index} className={activeClass} >
	          <a href="#"
	          
	          onClick={this.handleClick.bind(this, index)}
	          >
	          <span>{child.props.label}</span>
	          </a>
	        </li>

		    	
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
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }
  
  // _renderContent(){
  //   return(
  //     <div className="tabs__content">
  //     {this.props.children[this.state.selected]}
  //     </div>
  //   );
  // },
  render(){
    return (
      <div className = 'tabs'>
        {this._renderTitle()}
        

      </div>
    )
  }

}
// class Pane extends Component{
//   // displayName: 'Pane',
//   // propTypes: {
//   //   label: React.PropTypes.string.isRequired,
//   //   children: React.PropTypes.element.isRequired
//   // },
//   render() {
//     return (
//       <div>
//         {this.props.children}
//       </div>
//     );
//   }
// }


export default Tabs;


