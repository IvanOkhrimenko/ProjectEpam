import React, { Component } from 'react';

import { Link, Router } from 'react-router-dom';

class PostList extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }


  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }, () => console.log('Customers fetched...', posts)));

  }

  render() {
    console.log(this.state);
    if (this.state.posts.length === 0) {
      return <div>...loading</div>;
    }
    return (
      <div className="posts">
        <h2>Posts</h2>

        {Object.values(this.state.posts).map(post =>
          <div key={post.id} className='post'>
            <Link to={{
              pathname: `/posts/${post.id}/`,
              state: { posts: post }
            }}>
              <div className="postList-content">
                <img src={post.poster} alt="" />
                <div className='postList-text'>
                  <h2>{post.title}</h2>
                  <p className='post-description'>{post.body}</p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default PostList;

