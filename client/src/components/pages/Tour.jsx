import React, { Component } from 'react';
import Slider from '../Slider/Slider'
import Map from '../Map'
import '../css/Home.css'
import TourList from '../TourList';
import '../css/Tours.css';

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
			<div className='tours'>
				<Slider />
				<div className="member-name">
					<h2>Tours</h2>
					<input
						placeholder="Search"
						type="search"
						className="search-field"
						onChange={this.handleSearch}
					/>
				</div>
				<TourList filteredToursForTourList={filteredTours} />
				<Map filteredToursForMap={filteredTours} />
			</div>
		);
	}
}
