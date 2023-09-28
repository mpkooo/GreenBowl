import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'
import { Chip } from '../components/Chip'

function Onboarding9() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div class="myProgress">
        <div class="myBar9"></div>
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="onboarding10"
        />
      </div>

      <div className="OnboardingContainer">
        <p className="D3-B QuestionLabel">
          Tap on the ingredients that you are allergic to
        </p>
      </div>

      <div className="OnboardingInput">
        <div className="chipFrame">
          <Chip className="chip-instance" property1="default" text="Chickpea" />
          <Chip className="chip-instance" property1="default" text="Crab" />
          <Chip className="chip-instance" property1="selected" text="Dairy" />
          <Chip className="chip-instance" property1="default" text="Egg" />
          <Chip className="chip-instance" property1="default" text="Pea" />
          <Chip className="chip-instance" property1="default" text="Peanut" />
          <Chip className="chip-instance" property1="default" text="Prawn" />
          <Chip className="chip-instance" property1="default" text="Soybean" />
          <Chip
            className="chip-instance"
            property1="selected"
            text="Tree nuts"
          />
          <Chip className="chip-instance" property1="selected" text="Wheat" />
        </div>

        <TextBtn
          className="addIngredient"
          property1="icon-left"
          BtnName="Add Ingredient"
        />
      </div>
    </>
  )
}

export default Onboarding9
