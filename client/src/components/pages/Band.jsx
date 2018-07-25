import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bandFetchData, bandSetFilter } from '../../actions/band';
import '../css/Band.css';

class Band extends Component {
  componentDidMount() {
    if (this.props.band.length === 0) {
      this.props.fetchData('/band');
    }
  }

  render() {
    const { band } = this.props;
    console.log(this.props);
    return (
      <div className='band'>
        {
          this.props.hasErrored ?
            <p>Sorry! There was an error loading the actors</p>
            : null}
        {
          this.props.isLoading ?
            <div className="sk-folding-cube">
              loading...
            </div>
            : null
        }
        {Object.values(band).map(member =>
          <div className='band_member' key={member.id} >
            <div className='member-name'>
              <h2>{member.first_name} {member.last_name}</h2>
            </div>
            <div className="member-block">
              <div className='member-sector'>
                <img src={member.image} alt="" />
                <div className="member-info">
                  <p><span>BORN :</span>{member.born}</p>
                  <p><span>FROM :</span>{member.from}</p>
                  <p><span>PERSONAL :</span>{member.personal}</p>
                  <p><span>INSTRUMENT :</span>{member.instrument}</p>
                  <p><span>VITALS :</span>{member.vitals}</p>
                  <p><span>TIME IN BAND :</span>{member.time}</p>
                  {(member.died !== undefined) ? <p><span>DIED :</span>{member.died}</p> : null}

                </div>
              </div>
              <div className="member-story">
                <div className="story-name">Story</div>
                <div className="story">{member.biography}</div>
              </div>
            </div>
          </div>
        )}
      </div>

    );
  }
}
Band.propTypes = {
  fetchData: PropTypes.func,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  actors: PropTypes.any,
  setFilter: PropTypes.func,
  visibilityFilter: PropTypes.string,
}
const mapStateToProps = state => ({
  band: state.bandState.band,
  hasErrored: state.bandState.hasErrored,
  isLoading: state.bandState.isLoading,
  visibilityFilter: state.bandState.visibilityFilter,
});
const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(bandFetchData(url)),
  setFilter: filter => dispatch(bandSetFilter(filter)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Band);
