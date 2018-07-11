import React, { Component } from 'react';

class TourList extends Component {
  render() {
    return (
      <div className="posts">
        <h2>Posts</h2>

        {Object.values(this.props.filteredToursForTourList).map(tour =>
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

