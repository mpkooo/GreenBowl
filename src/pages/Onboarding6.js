import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'
import { SingleChoiceNoIcon } from '../components/SIngleChoiceNoIcon'

function Onboarding6() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div class="myProgress">
        <div class="myBar6"></div>
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="onboarding7"
        />
      </div>

      <div className="OnboardingContainer">
        <p className="D3-B QuestionLabel">
          Which of the below best describes your goal?
        </p>
      </div>

      <div className="OnboardingInput">
        <div className="singleChoiceBox">
          <SingleChoiceNoIcon
            property1="default"
            text="Control fat intake"
          ></SingleChoiceNoIcon>
          <SingleChoiceNoIcon
            property1="default"
            text="Increase muscle mass"
          ></SingleChoiceNoIcon>
          <SingleChoiceNoIcon
            property1="default"
            text="Decrease body fat percentage"
          ></SingleChoiceNoIcon>
          <SingleChoiceNoIcon
            property1="selected"
            text="Eat more fruits & vegetables"
          ></SingleChoiceNoIcon>
          <SingleChoiceNoIcon
            property1="default"
            text="Eat less sweets & carbohydrates"
          ></SingleChoiceNoIcon>
        </div>
      </div>
    </>
  )
}

export default Onboarding6
