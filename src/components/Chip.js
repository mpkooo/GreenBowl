import PropTypes from 'prop-types'
import React from 'react'
import { useReducer } from 'react'
import './style.css'
import '../index.css'

export const Chip = ({ property1, className, text }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || 'default',
  })

  return (
    <div
      className={`chip ${state.property1} ${className}`}
      onClick={() => {
        dispatch('click')
      }}
    >
      <div className="C1-M text-wrapper">{text}</div>
    </div>
  )
}

function reducer(state, action) {
  switch (action) {
    case 'click':
      return {
        ...state,
        property1: 'selected',
      }
  }

  return state
}

Chip.propTypes = {
  property1: PropTypes.oneOf(['selected', 'default']),
}
