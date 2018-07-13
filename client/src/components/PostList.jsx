import React, { Component } from 'react';
import news from '../img/newspaper-regular.svg'
import { Link } from 'react-router-dom';


class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      count: 5,
      name: 'Load More',
    };
  }

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }, () => console.log('Customers fetched...', posts)));
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
        <div className="posts-news">
          <img src={news} alt="" />
          <h2>News</h2>
        </div>
        <div>
          {items.map(post => (
            <div key={post.id} className='post'>
              <div className="postList-content">
                <div className='postList-text'>
                  <h2>{post.title}</h2>
                  <p className="post-description">{post.body}</p>
                </div>
                <div className="post-footer">
                  <p>{post.date}</p>
                  <Link to={{
                    pathname: `/posts/${post.id}/`,
                    state: { posts: post }
                  }}>

                    <p>Click here to read more <i className="fas fa-arrow-circle-right"></i> </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more" onClick={() => this.fetchMoreData(items)}>
          {this.state.name}
        </button>
      </div>
    );
  }
}

export default PostList;
