import React, { Component } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { historyFetchData } from '../../actions/history';
class BandHistory extends Component {
    componentDidMount() {
        if (this.props.history.length === 0) {
            this.props.fetchData('/history');
        }
    }
    render() {
        const { history } = this.props;
        const stories = [...history];
        console.log(stories);
        return (
            <div className="band">
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
                <div className='member-name'>
                    <h2>History</h2>
                </div>

                <div className="history-style">
                    {
                        stories.map((story) => (
                            <p id={story.id}>{story.story}</p>
                        ))
                    }
                </div>
            </div>
        )
    }

}
BandHistory.propTypes = {
    fetchData: PropTypes.func,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool,
    history: PropTypes.array,
}
const mapStateToProps = state => ({
    history: Object.values(state.historyState.history),
    hasErrored: state.historyState.hasErrored,
    isLoading: state.historyState.isLoading,
})
const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(historyFetchData(url)),
})
export default connect(mapStateToProps, mapDispatchToProps)(BandHistory);