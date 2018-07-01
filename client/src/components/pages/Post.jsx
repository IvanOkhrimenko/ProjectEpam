import React, { Component } from 'react';


export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state ? this.props.location.state : {};
        this.state.redirect = false;
    }

  render() {
    console.log(this.state);
    if (this.state.posts.length === 0) {
      return <div>...loading</div>;
    }
    return (
      <div className="posts">
        <h2>Posts</h2>

       
          <div key={this.state.posts.id} className='post'>
       
              <h2>{this.state.posts.title}</h2>
              <img src={this.state.posts.poster} alt="" />
              <p>{this.state.posts.body}</p>
          </div>
      </div>
    );
  }
}
