import React, { Component } from 'react';
import Post from './components/pages/Post'

import './App.css';
import Band from './components/pages/Band';
import Header from './components/Header'
import Home from './components/pages/Home';
import Tour from './components/pages/Tour';
import Footer from './components/Footer';
import Music from './components/pages/Music';
import Band_History from './components/pages/Band_History';
import { Route, Switch } from 'react-router-dom';


const App = () => {

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route path="/posts/:id" component={Post} />
				<Route path='/tour' component={Tour} />
				<Route path="/history" component={Band_History} />
				<Route path='/band' component={Band} />
				<Route path='/music' component={Music} />
				{/* <Route path='/videos' component={Videos} />
						<Route path='/actors/:hero' component={Actor} /> */}

				{/* <Route path='*' component={NotFound}/>  */}
			</Switch>
			<Footer />
		</div >
	);
}


export default App;
