import React, { Component } from 'react';

class TourList extends Component {
  render() {

    return (
      <div className="posts">

        {Object.values(this.props.filteredToursForTourList).map(tour =>
          <div key={tour.id} >

            <div className='tour-section'>
              <div className="tour-date">
                <h4>{tour.date}</h4>
              </div>
              <div className="tour-info">
                <h2>{tour.city.toUpperCase()}, {tour.state.toUpperCase()}, {tour.country.toUpperCase()}</h2>
                <p>{tour.place}</p>
              </div>
            </div>


          </div>
        )}
      </div>
    );
  }
}

export default TourList;

