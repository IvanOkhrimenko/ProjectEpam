import React, { Component } from 'react';
import Slider from '../Slider/Slider'
import Map from '../Map'
import '../css/Home.css'
import TourList from '../TourList';
import { log } from 'util';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			tours: [],
			searchQuery: ""
		};
	}
	componentDidMount() {
		fetch('/tour')
			.then(res => res.json())
			.then(tours => this.setState({ tours }, () => console.log('Customers fetched...', tours)));

	}
	
	handleSearch = event => {
		this.setState({
			searchQuery: event.target.value.toLowerCase()
		});
	};
	render() {
		if (this.state.tours.length === 0) {
			return <div>...loading</div>;
		}
		//search by state
		const filteredTours = this.state.tours.filter(
			tour => {
				return tour.state.toLowerCase().indexOf(this.state.searchQuery) !== -1;
			}
		);
		return (
			<div >

				<Slider />
				<input
					placeholder="Search"
					type="text"
					className="search-field"
					onChange={this.handleSearch}
				/>
				<TourList filteredToursForTourList={filteredTours} />
				<Map filteredToursForMap={filteredTours} />
			</div>
		);
	}
}
