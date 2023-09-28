import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Add from '../icons/Add.svg'
import ArrowRight from '../icons/ArrowRight.svg'
import '../index.css'
import './style.css'

const TestComponent = ({ name, redirect }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate(`/${redirect}`)
      }}
    >
      {name}
    </div>
  )
}

export const TextBtn = ({ property1, className, BtnName, Redirect }) => {
  return (
    <button className={`TextBtn ${property1} ${className}`}>
      {property1 === 'icon-left' && (
        <img src={Add} className="TextBtnAddIcon" />
      )}

      <div className="text-wrapper T1-SB">
        <TestComponent name={BtnName} redirect={Redirect} />
      </div>
      {property1 === 'icon-right' && (
        <img src={ArrowRight} className="TextBtnArrowRightIcon" />
      )}
    </button>
  )
}

TextBtn.propTypes = {
  property1: PropTypes.oneOf(['icon-left', 'icon-right', 'default']),
  text: PropTypes.string,
}
