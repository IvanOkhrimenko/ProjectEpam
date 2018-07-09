import React, { Component } from 'react';
import Slider from '../Slider/Slider'
import Map from '../Map'
import './Home.css'
import TourList from '../TourList';

export default class Home extends Component {
   
	render() {
		return (
			<div >
				<Slider />
                <TourList/>
				<Map />
			</div>
		);
	}
}
