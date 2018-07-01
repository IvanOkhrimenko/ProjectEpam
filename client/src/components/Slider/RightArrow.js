
import React from 'react'

const RightArrow = ({ nextSlide }) => {
  return (
    <div className='right-arrow' onClick={nextSlide}>
      <i className="fas fa-arrow-right"></i>
    </div>
  )
}

export default RightArrow;