import React, { Component } from 'react';

const SlideThree= (props) => {

  let background = {
    backgroundImage: 'url(https://ua-1.cdn-fullscreendirect.com/7549/2018_0121_7549_7871.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideThree;