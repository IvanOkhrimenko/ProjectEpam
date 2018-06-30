import React, { Component } from 'react';
import Slider from '../Slider/Slider'
import PostList from '../PostList'

export default class Home extends Component {
	render() {
		return (
			<div>
				<Slider />
				 <PostList /> 
			</div>
		);
	}
}
