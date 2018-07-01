import React, { Component } from 'react';
import Slider from '../Slider/Slider'
import PostList from '../PostList'
import './Home.css'

export default class Home extends Component {
	render() {
		return (
			<div className='home-style'>
				<Slider />
				 <PostList /> 
			</div>
		);
	}
}
