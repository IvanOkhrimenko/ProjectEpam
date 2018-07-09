import React, { Component } from 'react';

import { Link, Router } from 'react-router-dom';

class TourList extends Component {
  constructor() {
    super();
    this.state = { tours: [] };
  }


  componentDidMount() {
    fetch('/tour')
      .then(res => res.json())
      .then(tours => this.setState({ tours }, () => console.log('Customers fetched...', tours)));

  }

  render() {
    console.log(this.state);
    if (this.state.tours.length === 0) {
      return <div>...loading</div>;
    }
    return (
      <div className="posts">
        <h2>Posts</h2>

        {Object.values(this.state.tours).map(tour =>
          <div key={tour.id} >
            {/* <Link to={{
              pathname: `/posts/${post.id}/`,
              state: { posts: post }
            }}> */}
              <div className="">
                {/* <img src={post.name} alt="" /> */}
                <div className=''>
                  <h2>{tour.city.toUpperCase()}, {tour.state.toUpperCase()}, {tour.country.toUpperCase()}</h2>
                  <h4>{tour.date}</h4>
                  <p>{tour.place}</p>
                </div>
              </div>
            {/* </Link> */}
          </div>
        )}
      </div>
    );
  }
}

export default TourList;

