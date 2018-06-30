import React, { Component } from 'react';

const SlideOne = (props) => {

    let background = {
        backgroundImage: 'url(https://ua-1.cdn-fullscreendirect.com/7549/2016_0924_7549_4693.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}

export default SlideOne;