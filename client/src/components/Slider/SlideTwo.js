import React from 'react';
import slide2 from '../../img/slide2.jpeg';
const SlideTwo = (props) => {

  let background = {
    backgroundImage: `url(${slide2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideTwo;