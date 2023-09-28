import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import ContinentGroup from '../components/ContinentGroup.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'
import { ChipBorder } from '../components/ChipBorder'

function Onboarding1() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div class="myProgress">
        <div class="myBar1"></div>
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="onboarding2"
        />
      </div>

      <div className="OnboardingContainer">
        <p className="D3-B QuestionLabel">Where are you from?</p>
        <p className="B1-M QuestionSubLabel">
          I need this information in order to whip up meal that you’re familiar
          with.
        </p>
      </div>

      <div class="ContinentBox">
        <img src={ContinentGroup} />
      </div>

      <div className="ChipNA">
        <ChipBorder property1="default" text="North America" />
      </div>

      <div className="ChipSA">
        <ChipBorder property1="default" text="South America" />
      </div>

      <div className="ChipE">
        <ChipBorder property1="default" text="Europe" />
      </div>

      <div className="ChipAF">
        <ChipBorder property1="default" text="Africa" />
      </div>

      <div className="ChipAS">
        <ChipBorder property1="default" text="Asia" />
      </div>

      <div className="ChipAU">
        <ChipBorder property1="selected" text="Australia" />
      </div>
    </>
  )
}

export default Onboarding1
