import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'
import { PlaceHolderWhite } from '../components/PlaceHolderWhite'

function Onboarding3() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div class="myProgress">
        <div class="myBar3"></div>
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="onboarding4"
        />
      </div>

      <div className="OnboardingContainer">
        <p className="D3-B QuestionLabel">What is your height?</p>
      </div>

      <div className="OnboardingInput">
        <PlaceHolderWhite property1="filled-w-ith-unit" text="160" unit="cm" />
      </div>
    </>
  )
}

export default Onboarding3
