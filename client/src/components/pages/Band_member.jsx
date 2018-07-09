import React, { Component } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state ? this.props.location.state : {};
    }

    render() {
        console.log(this.state);
        const member = this.state.members;
        if (member.died !== undefined) {
            return (
                <div className="posts-page">
                    <div key={member.id} className="post-page">
                        <img className="post-img" src={member.image} alt="" />
                        <h2>{member.first_name.toUpperCase()} {member.last_name.toUpperCase()}</h2>
                        <p>{member.biography}</p>
                        <p>Born: {member.born}</p>
                        <p>Died:{member.died}</p>
                        <p>Height: {member.height}</p>
                    </div>
                </div>
            );
        }
        return (
            <div className="posts-page">
                <div key={member.id} className="post-page">
                    <img className="post-img" src={member.image} alt="" />
                    <h2>{member.first_name.toUpperCase()} {member.last_name.toUpperCase()}</h2>
                    <p>{member.biography}</p>
                    <p>Born: {member.born}</p>
                    <p>Height: {member.height}</p>
                </div>
            </div>
        );
    }
}
