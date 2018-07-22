import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
// import PostPreview from './PostPreview';
// import { apiPrefix } from '../../../server/config.json';
import {
  postsFetchData,
  postsLoadMore,
  postsSearch,
  postsResetLimit,
} from '../actions/posts';
// import '../../css/loader.css';
// import '../../css/posts.css';

class PostList extends Component {
  componentDidMount() {
    if (this.props.posts.length === 0) {
      this.props.fetchData(`/posts`);
    }
  }

  componentWillUnmount() {
    this.props.resetLimit();
  }

  getVisiblePosts() {
    const { posts, limit } = this.props;
    const visiblePosts = [...posts];
    // Cutting off only posts we need to render
    visiblePosts.length = limit;
    return visiblePosts;
  }

  scrollToTop() {
    this.postsSection.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const {
      posts,
      loadMore,
      limit,
      searchPosts,
    } = this.props;
    console.log(this.props)
    // Variable for later checking if limit is bigger than actual number of posts
    const initialLength = posts.length;
    const visiblePosts = this.getVisiblePosts();

    return (
      <div>
        <div className="search-bar">
          <input type="text"
            placeholder="Type here to search"
            ref={(input) => { this.searchInput = input; }}
            onChange={() => {
              searchPosts(this.searchInput.value);
              this.scrollToTop();
            }}
          />
        </div>
        <main className="main-posts">
          {
            this.props.hasErrored ?
              <p>Sorry! There was an error loading the posts</p>
              : null}
          {
            this.props.isLoading ?
              <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
              </div>
              : null
          }

          <section className='posts' ref={(section) => { this.postsSection = section; }}>
            {

              visiblePosts.map((post) => (
                <div key={post.id} className='post'>
                  <div className="postList-content">
                    <div className='postList-text'>
                      <h2>{post.title}</h2>
                      <p className="post-description">{post.body}</p>
                    </div>
                    <div className="post-footer">
                      <p>{post.date}</p>
                      <Link to={{
                        pathname: `/posts/${post.id}/`
                      }}>
                        <p>Click here to read more <i className="fas fa-arrow-circle-right"></i> </p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}


            {/* If all posts were rendered, button will be removed */}
            {
              initialLength > limit && initialLength > 10 ?
                <div className="load-more" onClick={(e) => {
                  e.preventDefault();
                  loadMore(30);
                }}>Load more</div>
                :
                <div className="load-more" onClick={(e) => {
                  e.preventDefault();
                  this.scrollToTop();
                }}>Back To Top
                </div>
            }
          </section>
        </main>
      </div>
    );
  }
}

PostList.propTypes = {
  fetchData: PropTypes.func,
  loadMore: PropTypes.func,
  resetLimit: PropTypes.func,
  searchPosts: PropTypes.func,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  posts: PropTypes.array,
  limit: PropTypes.number,
};
console.log(PostList.propTypes);
// Posts being filtered before passing to props
const mapStateToProps = state => ({
  posts: Object.values(state.postsState.posts)
    .filter(post => post.title.toLowerCase().includes(state.postsState.searchFilter.toLowerCase())),
  hasErrored: state.postsState.hasErrored,
  isLoading: state.postsState.isLoading,
  limit: state.postsState.limit,

});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(postsFetchData(url)),
  loadMore: limit => dispatch(postsLoadMore(limit)),
  resetLimit: () => dispatch(postsResetLimit()),
  searchPosts: searchFilter => dispatch(postsSearch(searchFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
