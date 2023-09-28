import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowLeft from '../icons/ArrowLeft.svg' // Import your SVG here

const TestComponent = ({ redirect }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate(`/${redirect}`)
      }}
    >
      <img src={ArrowLeft} alt="Icon" />
    </div>
  )
}

const returnBtn = ({ className, Redirect }) => {
  return (
    <div className={className}>
      <TestComponent redirect={Redirect} />
    </div>
  )
}

export default returnBtn
