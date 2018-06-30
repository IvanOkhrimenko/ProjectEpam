
import React from 'react'

const RightArrow = ({ nextSlide }) => {
  return (
    <div className='right-arrow' onClick={nextSlide}>
      <i class="fas fa-arrow-right"></i>
    </div>
  )
}

export default RightArrow;