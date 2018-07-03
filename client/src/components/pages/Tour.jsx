import React, { Component } from 'react';
import Slider from '../Slider/Slider'
import Map from '../Map'
import './Home.css'

export default class Home extends Component {
   
	render() {
		return (
			<div className='home-style'>
				<Slider />
				<Map />
			</div>
		);
	}
}
