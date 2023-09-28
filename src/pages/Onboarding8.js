import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'
import { Chip } from '../components/Chip'

function Onboarding8() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div class="myProgress">
        <div class="myBar8"></div>
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="onboarding9"
        />
      </div>

      <div className="OnboardingContainer">
        <p className="D3-B QuestionLabel">
          Tap on the ingredients that you want to restrict
        </p>
      </div>

      <div className="OnboardingInput">
        <div className="chipFrame">
          <Chip className="chip-instance" property1="default" text="Avocado" />
          <Chip className="chip-instance" property1="selected" text="Bacon" />
          <Chip className="chip-instance" property1="default" text="Banana" />
          <Chip className="chip-instance" property1="default" text="Beef" />
          <Chip
            className="chip-instance"
            property1="default"
            text="Chocolate"
          />
          <Chip className="chip-instance" property1="default" text="Honey" />
          <Chip className="chip-instance" property1="default" text="Pork" />
          <Chip className="chip-instance" property1="selected" text="Sugar" />
          <Chip
            className="chip-instance"
            property1="default"
            text="White Bread"
          />
          <Chip
            className="chip-instance"
            property1="default"
            text="White Rice"
          />
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

export default Onboarding8
