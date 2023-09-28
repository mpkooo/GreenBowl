import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import '../index.css'
import Record from '../icons/Record.svg'
import TickCircle from '../icons/Tick Circle.svg'

export const MultipleChoices = ({ property1, className, text }) => {
  return (
    <div className={`multiple-choices ${property1} ${className}`}>
      <div className="MultipleChoicesFrame">
        <div className="B1-M MultipleChoicesText">{text}</div>
      </div>
      <img
        className="MultipleChoicesTick"
        src={property1 === 'selected' ? TickCircle : Record}
      />
    </div>
  )
}

MultipleChoices.propTypes = {
  property1: PropTypes.oneOf(['selected', 'default']),
}
