import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'
import { PlaceHolderWhite } from '../components/PlaceHolderWhite'

function Onboarding4() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div class="myProgress">
        <div class="myBar4"></div>
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="onboarding5"
        />
      </div>

      <div className="OnboardingContainer">
        <p className="D3-B QuestionLabel">What is your current weight?</p>
        <p className="B1-M QuestionSubLabel">
          I don’t mean to pry, I just need to know so I can generate what’s
          right for you.
        </p>
      </div>

      <div className="OnboardingInput">
        <PlaceHolderWhite property1="filled-w-ith-unit" text="50" unit="kg" />
      </div>

      <div className="CaptionContainer">
        <p className="C1-M CaptionLabel">Thank you for sharing!</p>
        <p className="C1-R CaptionSubLabel">
          That’s an important (and hard) first step.
        </p>
      </div>
    </>
  )
}

export default Onboarding4
