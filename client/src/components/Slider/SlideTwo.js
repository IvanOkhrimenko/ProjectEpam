import React, { Component } from 'react';

const SlideTwo = (props) => {

  let background = {
    backgroundImage: 'url(https://d5lq1fn667whc.cloudfront.net/resize?url=https%3A%2F%2Fd180qbda6o7e4k.cloudfront.net%2F0a%2F9c%2F0c%2F80%2Fb4%2F39%2F46%2F37%2Fa0%2Fcc%2F25%2F1c%2F95%2F30%2Fe1%2F20%2F2016_1118_7549_5091.jpeg&width=800&mode=contain)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideTwo;