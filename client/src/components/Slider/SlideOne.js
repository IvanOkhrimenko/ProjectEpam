import React, { Component } from 'react';
import slide1 from '../../img/slide1.jpg';
const SlideOne = (props) => {

    let background = {
        backgroundImage: `url(${slide1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}

export default SlideOne;