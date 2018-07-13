import React, { Component } from 'react';
import "./Music.css";
import Slider from '../Slider/Slider'
import AudioBubble from "../AudioBubble";



class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null,
            songs: [],
            searchQuery: ""
        };
    }

    onComplete() {
        this.setState({
            activeIndex: null
        });
    }
    setActive(i) {
        const index = i === this.state.activeIndex ? null : i;
        this.setState({
            activeIndex: index
        });
    }
    handleSearch = event => {
        this.setState({
            searchQuery: event.target.value.toLowerCase()
        });
    };
    componentDidMount() {
        fetch('/music')
            .then(res => res.json())
            .then(songs => this.setState({ songs }, () => console.log('Customers fetched...', songs)));

    }
    render() {
        console.log(this.state)
        if (this.state.songs.length === 0) {
            return <div>...loading</div>;
        }

        const filteredSongs = this.state.songs.filter(
            song => {
                return song.title.toLowerCase().indexOf(this.state.searchQuery) !== -1;
            }
        );

        return (
            <div>
                <Slider />
                <div className="player">

                    <div className="member-name">
                        <h2>Music</h2>
                        <input
                            placeholder="Search"
                            type="search"
                            className="search-field"
                            onChange={this.handleSearch}
                        />

                    </div>
                    <div className="player__items">
                        {Object.values(filteredSongs).map((audio, i) =>
                            <AudioBubble
                                active={this.state.activeIndex === i}
                                key={audio.title}
                                title={audio.title}
                                subtitle={audio.subtitle}
                                image={audio.image}
                                audio={audio.audio}
                                setActive={this.setActive.bind(this, i)}
                                onComplete={this.onComplete.bind(this)}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Music;





