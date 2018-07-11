import React, { Component } from 'react';
import "./Music.css";
import AudioBubble from "./AudioBubble";
const AUDIO = [
    {
        title: 'Master of Puppets',
        subtitle: 'Master of Puppets',
        image: 'https://piers.io/codepen/music-player/port-isla/thumb.jpg',
        audio: 'https://piers.io/codepen/music-player/port-isla/audio.m4a'
    },
    {
        title: 'Lament',
        subtitle: 'Piers Olenski',
        image: 'https://piers.io/codepen/music-player/piers-olenski/thumb.jpg',
        audio: 'https://piers.io/codepen/music-player/piers-olenski/audio.mp3'
    },
    {
        title: 'Beach Ball Dinner',
        subtitle: 'Man Bro Dude',
        image: 'https://piers.io/codepen/music-player/man-bro-dude/thumb.jpg',
        audio: 'https://piers.io/codepen/music-player/man-bro-dude/audio.mp3'
    }
];


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
            <div className="player">
               <input
                placeholder="Search"
                type="text"
                className="search-field"
                onChange={this.handleSearch}
              />
                <svg className="player__wave" viewBox="0 0 1354 128.8">
                    <path
                        fill="none"
                        stroke="#ab2e36"
                        d="M.3 29.9c41.3-9.3 110.6-22.7 197-27 354.8-17.8 514.5 140.6 813 123 78.5-4.6 198.1-23.3 343-96"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                    />
                </svg>
                <h1 className="player__title">New releases</h1>
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
        );
    }
}

export default Music;





