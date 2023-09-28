// SecondaryBtn.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'
import '../index.css'

const TestComponent = ({ name, redirect, className, divClassName }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate(`/${redirect}`)
      }}
    >
      <button className={`secondary-btn ${className}`}>
        <div className={`text-wrapper T2-SB ${divClassName}`}>{name}</div>
      </button>
    </div>
  )
}

const SecondaryBtn = ({ className, divClassName, BtnName, Redirect }) => {
  return (
    <TestComponent
      name={BtnName}
      redirect={Redirect}
      className={className}
      divClassName={divClassName}
    />
  )
}

SecondaryBtn.propTypes = {
  text: PropTypes.string,
}

export default SecondaryBtn
