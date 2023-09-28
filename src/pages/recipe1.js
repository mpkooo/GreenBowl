import React from 'react'
import './pages.css'
import CloseBtn from '../components/closeBtn'
import ReturnBtn from '../components/returnBtn'
import { TextBtn } from '../components/TextBtn'
import { Chip } from '../components/Chip'

function recipe1() {
  return (
    <>
      <div className="returnBtnBox">
        <ReturnBtn Redirect="recipeStart" className="returnBtn" />
      </div>

      <div className="closeBtnBox">
        <CloseBtn className="Close" Redirect="home" />
      </div>

      <div className="recipeHeadBox">
        <p className="recipeTitle H1-B">
          Tap on cuisine & food that you want to eat
        </p>
        <p className="recipeBody B1-M">Feel free to choose more than 1</p>
      </div>

      <div className="recipeInput">
        <div className="chipFrame">
          <Chip
            className="chip-instance"
            property1="default"
            text="I have no idea"
          />
          <Chip
            className="chip-instance"
            property1="selected"
            text="Breakfast & Brunch"
          />
          <Chip className="chip-instance" property1="default" text="Burgers" />
          <Chip className="chip-instance" property1="default" text="Dessert" />
          <Chip className="chip-instance" property1="default" text="Dimsum" />
          <Chip className="chip-instance" property1="default" text="Drinks" />
          <Chip
            className="chip-instance"
            property1="default"
            text="Fried Food"
          />
          <Chip
            className="chip-instance"
            property1="default"
            text="Frozen & Ice Cream"
          />
          <Chip className="chip-instance" property1="default" text="Indian" />
          <Chip className="chip-instance" property1="default" text="Italian" />
          <Chip
            className="chip-instance"
            property1="default"
            text="Juice/Smoothies"
          />
          <Chip className="chip-instance" property1="default" text="Mexicans" />
          <Chip className="chip-instance" property1="default" text="Thai" />
          <Chip className="chip-instance" property1="default" text="Pizza" />
          <Chip className="chip-instance" property1="default" text="Ramen" />
          <Chip
            className="chip-instance"
            property1="selected"
            text="Ricebowl"
          />
          <Chip className="chip-instance" property1="default" text="Steak" />
          <Chip
            className="chip-instance"
            property1="default"
            text="Salad & Healthy food"
          />
          <Chip
            className="chip-instance"
            property1="default"
            text="Spicy food"
          />
          <Chip className="chip-instance" property1="default" text="Sushi" />
        </div>
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="recipe2"
        />
      </div>
    </>
  )
}

export default recipe1
