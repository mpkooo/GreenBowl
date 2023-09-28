import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import '../index.css'

export const SingleChoiceNoIcon = ({ property1, className, text }) => {
  return (
    <div className={`single-choice-no ${property1} ${className}`}>
      <div className="SingleChoiceNoIconFrame">
        <div className="B1-M SingleChoiceNoIconText">{text}</div>
      </div>
    </div>
  )
}

SingleChoiceNoIcon.propTypes = {
  property1: PropTypes.oneOf(['selected', 'default']),
}
