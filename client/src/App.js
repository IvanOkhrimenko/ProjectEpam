import React, { Component } from 'react';
import Post from './components/pages/Post'
import Band_member from './components/pages/Band_member'
import './App.css';
import Band from './components/Band';
import Header from './components/Header'
import Home from './components/pages/Home';
import Tour from './components/pages/Tour';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route path="/posts/:id" component={Post} />
					<Route path='/tour' component={Tour} />
					<Route path="/band/:id" component={Band_member} />
					{/* <Route path='/music' component={Music} />
						<Route path='/videos' component={Videos} />
						<Route path='/actors/:hero' component={Actor} /> */}
					<Route path='/band' component={Band} /> */}
						{/* <Route path='*' component={NotFound}/>  */}
				</Switch>
				<Footer />
			</div >
		);
	}
}

export default App;
