import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { postsFetchData } from '../../actions/posts';
class Post extends Component {
    
    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.props.fetchData('/posts');
            console.log(this.props);
        }
    }
    render() {
        const { id } = this.props.match.params;
        const post = this.props.posts[`${id}`];
        if (!post) {
            return (
                <main >
                    dsfgsgdfdghsdg
                </main>
            );
        }
        return (

            <div className="posts-page">
                <div key={post.id} className="post-page">
                    <h2>{post.title.toUpperCase()}</h2>
                    <img className="post-img" src={post.poster} alt="" />
                    <p>{post.fullBody}</p>
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    fetchData: PropTypes.func,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool,
    posts: PropTypes.any,
    match: PropTypes.object,
};

const mapStateToProps = state => ({
    posts: state.postsState.posts,
    hasErrored: state.postsState.hasErrored,
    isLoading: state.postsState.isLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(postsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
