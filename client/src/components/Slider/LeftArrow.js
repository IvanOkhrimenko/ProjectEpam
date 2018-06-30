import React from 'react'

const LeftArrow = ({ previousSlide }) => {
  return (
    <div className='left-arrow' onClick={previousSlide}>
      <i class="fas fa-arrow-left"></i>
    </div>
  )
}

export default LeftArrow;