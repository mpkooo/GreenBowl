import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'
import { MultipleChoices } from '../components/MultipleChoices'

function Onboarding7() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div class="myProgress">
        <div class="myBar7"></div>
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="onboarding8"
        />
      </div>

      <div className="OnboardingContainer">
        <p className="D3-B QuestionLabel">Select your dietary restriction</p>
      </div>

      <div className="OnboardingInput">
        <div className="singleChoiceBox">
          <MultipleChoices
            property1="default"
            text="Vegetarian"
          ></MultipleChoices>
          <MultipleChoices
            property1="default"
            text="Gluten Free"
          ></MultipleChoices>
          <MultipleChoices
            property1="selected"
            text="Lactose Intolerance"
          ></MultipleChoices>
          <MultipleChoices
            property1="selected"
            text="Food Allergies"
          ></MultipleChoices>
          <MultipleChoices
            property1="default"
            text="Diabetes Diet"
          ></MultipleChoices>
          <MultipleChoices
            property1="selected"
            text="Low Sodium Diet"
          ></MultipleChoices>
        </div>
      </div>
    </>
  )
}

export default Onboarding7
