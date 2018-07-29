import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { musicFetchData, musicSetActiveIndex, musicSearch } from '../../actions/music';
import "../css/Music.css";
import Slider from '../Slider/Slider'
import AudioBubble from "../AudioBubble";



class Music extends Component {
    componentDidMount() {
        if (this.props.songs.length === 0) {
            this.props.fetchData('/music');
        }
    }
    componentWillUnmount() {
        this.props.setIndex(null);
    }
    onComplete() {
        this.props.setIndex(null)
    }
    setActive(i) {
        const index = i === this.state.activeIndex ? null : i;
        this.props.setIndex(index)
    }


    render() {
        const { songs, activeIndex, searchSongs } = this.props;

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
                            ref={(input) => { this.searchInput = input; }}
                            onChange={() => {
                                searchSongs(this.searchInput.value);

                            }}
                        />

                    </div>
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
                    <div className="player__items">
                        {songs.map((audio) =>
                            <AudioBubble
                                active={activeIndex === audio.id}
                                key={audio.title}
                                title={audio.title}
                                subtitle={audio.subtitle}
                                image={audio.image}
                                audio={audio.audio}
                                setActive={this.setActive.bind(this, audio.id)}
                                onComplete={this.onComplete.bind(this)}
                            />)}
                    </div>
                </div>
            </div>
        );
    }
}
Music.propTypes = {
    fetchData: PropTypes.func,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool,
    songs: PropTypes.any,
    searchSongs: PropTypes.func,

}
const mapStateToProps = state => ({
    songs: Object.values(state.musicState.songs)
        .filter(song => song.title.toLowerCase().includes(state.musicState.searchFilter.toLowerCase())),
    hasErrored: state.musicState.hasErrored,
    isLoading: state.musicState.isLoading,
    activeIndex: state.musicState.activeIndex,

});
const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(musicFetchData(url)),
    setIndex: index => dispatch(musicSetActiveIndex(index)),
    searchSongs: searchFilter => dispatch(musicSearch(searchFilter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Music);





