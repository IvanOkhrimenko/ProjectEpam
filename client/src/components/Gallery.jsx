import React, { Component } from 'react';
import './Gallery.css';

let imgUrls = [
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051209_7549_991907.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051213_7549_991924.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051210_7549_991910.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051209_7549_991906.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051210_7549_991908.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051213_7549_991923.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051211_7549_991915.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051212_7549_991917.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051211_7549_991914.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051211_7549_991913.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051214_7549_991925.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051212_7549_991916.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051206_7549_991894.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051212_7549_991919.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051205_7549_991891.jpeg',
    'https://up-1.cdn-fullscreendirect.com/photos/7549/large/20170520_051208_7549_991903.jpeg'
];
// Component for gallery modal
class GalleryModal extends Component {

    render() {
        if (this.props.isOpen === false) {
            return null;
        }
        return (
            <div isOpen={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
                <div className='modal-body'>
                    <a className='modal-close' href='#' onClick={this.props.onClick}><span className='fa fa-times'></span></a>
                    <img src={this.props.src} />
                </div>
            </div>
        )
    }
}

// Component for gallery
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            url: '',
            photos: []
        }
    }
    


// Function for opening modal dialog
openModal = (url, e) => {
    this.setState({
        showModal: true,
        url: url
    })
};

// Function for closing modal dialog
closeModal = () => {
    this.setState({
        showModal: false,
        url: ''
    })
}
render() {
    return (
        <div className='gallery-container'>
            {
                imgUrls.map((url, index) => {
                    return <div className='gallery-card'>
                        <img className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
                        <span className='card-icon-open fa fa-expand' value={url} onClick={(e) => this.openModal(url, e)}></span>
                    </div>

                })
            }

            <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
        </div>
    )
}
}


export default Gallery;
