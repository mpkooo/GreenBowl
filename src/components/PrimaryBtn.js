// PrimaryBtn.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'
import '../index.css'

const TestComponent = ({ name, redirect, property1, className }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate(`/${redirect}`)
      }}
    >
      <button className={`primary-btn ${property1} ${className}`}>
        <div className="text-wrapper T1-SB">{name}</div>
      </button>
    </div>
  )
}

const PrimaryBtn = ({ property1, className, BtnName, Redirect }) => {
  return (
    <TestComponent
      name={BtnName}
      redirect={Redirect}
      property1={property1}
      className={className}
    />
  )
}

PrimaryBtn.propTypes = {
  property1: PropTypes.oneOf(['disable', 'default']),
}

export default PrimaryBtn
