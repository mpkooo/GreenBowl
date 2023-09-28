import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export const ChipBorder = ({ property1, className, text }) => {
  return (
    <div className={`chipBorder ${property1} ${className}`}>
      <div className="B1-M text-wrapper">{text}</div>
    </div>
  )
}

ChipBorder.propTypes = {
  property1: PropTypes.oneOf(['selected', 'default']),
}
