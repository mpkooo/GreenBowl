import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import '../index.css'

export const SingleChoice = ({
  property1,
  className,
  source,
  titleText,
  bodyText,
}) => {
  return (
    <div className={`single-choice ${property1} ${className}`}>
      <img src={source} className="singleChoiceIcon" />
      <div className="singleChoiceFrame">
        <div className="B1-M singleChoiceTitleText">{titleText}</div>
        <div className="C1-R singleChoiceBodyText">{bodyText}</div>
      </div>
    </div>
  )
}

SingleChoice.propTypes = {
  property1: PropTypes.oneOf(['selected', 'default']),
}
