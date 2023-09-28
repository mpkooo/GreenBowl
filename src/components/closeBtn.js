import React from 'react'
import { useNavigate } from 'react-router-dom'
import Close from '../icons/Close.svg' // Import your SVG here

const TestComponent = ({ redirect }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate(`/${redirect}`)
      }}
    >
      <img src={Close} alt="Icon" />
    </div>
  )
}

const closeBtn = ({ className, Redirect }) => {
  return (
    <div className={className}>
      <TestComponent redirect={Redirect} />
    </div>
  )
}

export default closeBtn
