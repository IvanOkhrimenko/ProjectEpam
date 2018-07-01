import React, { Component } from 'react';
import Post from './components/pages/Post'
import './App.css';
import Customers from './components/customers';
import Header from './components/Header'
import Home from './components/pages/Home'
import Footer from './components/Footer'
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
						{/* <Route path="/posts/:id" component={Post} />
						<Route path='/contacts' component={Contacts} />
						<Route path='/music' component={Music} />
						<Route path='/videos' component={Videos} />
						<Route path='/actors/:hero' component={Actor} /> */}
						<Route path='/band' component={Customers} />
						{/* <Route path='*' component={NotFound}/>  */}
					</Switch>
          <Footer/>
      </div >
    );
  }
}

export default App;
