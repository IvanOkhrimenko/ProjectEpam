import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import './customers.css';
import Gallery from './Gallery'

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
      <div>
        <h2>Members</h2>
      <div className='band'>
        
        {Object.values(this.state.members).map(member =>

          <div className='band_member' key={member.id} >
               <div className='member-info'>
              <h2>{member.first_name} {member.last_name}</h2>
              <p>Role: {member.role}</p>
              <p>{member.time}</p>
            </div>
            <img src={member.image} alt="" />
            <Link to={{
                pathname: `/band/${member.id}/`,
                state: { members: member }
              }}>
              <p>More information</p>
            </Link>
          </div>         
        )}
        {/* <div className="gallery"> */}
         
        {/* </div> */}
        
      </div>
      <h1>Gallery</h1>
      <Gallery />
      </div>

    );
  }
}

export default Band;
