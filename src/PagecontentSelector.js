import React, { Component } from 'react';
import Processpage from './components/ProcessPage/Processpage'
import Casestudypage from './components/CaseStudyPage/CaseStudyPage'
import Aboutpage from './components/AboutPage/Aboutpage'
import Contactpage from './components/ContactPage/ContactPage'
import { Switch, Route, Redirect, HashRouter, withRouter } from 'react-router-dom'



const PagecontentSelector = () => (
	//base on the top-tab, this component will return the relavent content for that page
	<main>
		<Switch>
			<Route path="/" exact component={() => <Redirect to="/aboutus" />} />
		    <Route exact path='/aboutus' component={Aboutpage}/>
		    <Route path='/process' component={Processpage}/>
		    <Route path='/casestudy' component={Casestudypage}/>
		    <Route path='/contact' component={Contactpage}/>
	    </Switch>
	</main>
	
)
export default PagecontentSelector;
