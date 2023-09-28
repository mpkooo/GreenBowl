import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import '../index.css'

export const PlaceHolderWhite = ({ property1, text, unit }) => {
  return (
    <div className="place-holder-white">
      {property1 === 'filled-w-ith-unit' && (
        <>
          <div className="placeholder B1-M">{text}</div>
          <div className="text-wrapper B1-M">{unit}</div>
        </>
      )}

      {property1 === 'filled' && <div className="div B1-M">{text}</div>}
    </div>
  )
}

PlaceHolderWhite.propTypes = {
  property1: PropTypes.oneOf(['filled-w-ith-unit', 'filled']),
  text: PropTypes.string,
}
