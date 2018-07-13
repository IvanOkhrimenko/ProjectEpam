import React from 'react';
import slide3 from '../../img/slide3.jpeg';
const SlideThree= (props) => {

  let background = {
    backgroundImage: `url(${slide3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideThree;