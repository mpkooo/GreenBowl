import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'
import { Chip } from '../components/Chip'

function Onboarding10() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div class="myProgress">
        <div class="myBar10"></div>
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="default"
          BtnName="Finish"
          Redirect="finishonboard"
        />
      </div>

      <div className="OnboardingContainer">
        <p className="D3-B QuestionLabel">Tap on your favorite ingredients!</p>
      </div>

      <div className="OnboardingInput">
        <div className="chipFrame">
          <Chip className="chip-instance" property1="default" text="Almond" />
          <Chip className="chip-instance" property1="selected" text="Avocado" />
          <Chip className="chip-instance" property1="selected" text="Banana" />
          <Chip className="chip-instance" property1="default" text="Cheese" />
          <Chip className="chip-instance" property1="selected" text="Egg" />
          <Chip className="chip-instance" property1="selected" text="Oats" />
          <Chip className="chip-instance" property1="selected" text="Pumpkin" />
          <Chip className="chip-instance" property1="default" text="Rice" />
          <Chip className="chip-instance" property1="selected" text="Salmon" />
          <Chip className="chip-instance" property1="default" text="Seaweed" />
          <Chip className="chip-instance" property1="selected" text="Thyme" />
          <Chip className="chip-instance" property1="selected" text="Tomato" />
          <Chip className="chip-instance" property1="selected" text="Tuna" />
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

export default Onboarding10
