import React, { Component } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state ? this.props.location.state : {};
        this.state.redirect = false;
    }

    render() {
        console.log(this.state);
        const post = this.state.posts;
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
