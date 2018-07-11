import React from "react";
import { Link, Router } from 'react-router-dom';
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class PostList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      count: 5,
      name: 'Load More'
    };
  }

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }, () => console.log('Customers fetched...', posts)));
    console.log(this.state)
  }
  fetchMoreData = (items) => {
    if (items.length >= 100) {
      this.setState({ name: 'All posts loaded' });
      return;
    }

    setTimeout(() => {
      this.setState({
        count: this.state.count + 10,
      });
      items = Object.values(this.state.posts).slice(5, this.state.count)
    }, 500);
  };

  render() {
    let items = [];
    if (this.state.posts.length === 0) {
      console.log('safdsas')
    }
    items = Object.values(this.state.posts).slice(0, this.state.count);
    return (
      <div className="posts">
        <h1>Posts</h1>
        <div>
          {items.map(post => (
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
          ))}
        </div>
        <button className="button" onClick={() => this.fetchMoreData(items)}>
          {this.state.name}
        </button>
      </div>
    );
  }
}

export default PostList;
