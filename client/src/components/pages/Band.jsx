import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import '../css/Band.css';
import Gallery from '../Gallery'

class Band extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    fetch('/band')
      .then(res => res.json())
      .then(members => this.setState({ members }, () => console.log('Customers fetched...', members)));

  }

  render() {
    console.log(this.state.members)
    if (this.state.members.length === 0) {
      return <div>...loading</div>;
    }
    return (
      <div className='band'>
        {Object.values(this.state.members).map(member =>
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
                  {(member.died != undefined) ? <p><span>DIED :</span>{member.died}</p> : console.log('nothing')}

                </div>
              </div>
              <div className="member-story">
                <div className="story-name">Story</div>
                <div className="story">{member.biography}</div>
              </div>
            </div>
          </div>
        )}

        <h1>Gallery</h1>
        <Gallery />
      </div>

    );
  }
}

export default Band;
