import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'
import { SingleChoice } from '../components/SingleChoice'
import apple from '../components/apple.svg'
import pear from '../components/pear.svg'
import banana from '../components/banana.svg'
import hourglass from '../components/hourglass.svg'
import strawberry from '../components/strawberry.svg'

function Onboarding5() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div class="myProgress">
        <div class="myBar5"></div>
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="onboarding6"
        />
      </div>

      <div className="OnboardingContainer">
        <p className="D3-B QuestionLabel">What is your body shape?</p>
      </div>

      <div className="OnboardingInput">
        <div className="singleChoiceBox">
          <SingleChoice
            property1="default"
            source={apple}
            titleText="Apple Shape"
            bodyText="Rounder midsection, weight around the abdomen"
          ></SingleChoice>
          <SingleChoice
            property1="selected"
            source={pear}
            titleText="Pear Shape"
            bodyText="Narrower upper body, wider hips and thighs"
          ></SingleChoice>
          <SingleChoice
            property1="default"
            source={banana}
            titleText="Banana Shape"
            bodyText="Evenly distributed body shape, minimal variation"
          ></SingleChoice>
          <SingleChoice
            property1="default"
            source={hourglass}
            titleText="Hourglass Shape"
            bodyText="Well-defined curves, narrower waist compared to bust and hips"
          ></SingleChoice>
          <SingleChoice
            property1="default"
            source={strawberry}
            titleText="Strawberry Shape"
            bodyText="Broader upper body, narrower hips and legs"
          ></SingleChoice>
        </div>
      </div>
    </>
  )
}

export default Onboarding5
