import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import '../index.css'

export const SingleChoiceBorder = ({
  property1,
  className,
  source,
  title,
  bodyText,
}) => {
  return (
    <div className={`frame ${property1} ${className}`}>
      <img className="image" src={source} />
      <div className="div">
        <div className="text-wrapper B1-M">{title}</div>
        <div className="text-wrapper-2 C1-R">{bodyText}</div>
      </div>
    </div>
  )
}

SingleChoiceBorder.propTypes = {
  property1: PropTypes.oneOf(['selected', 'default']),
}
