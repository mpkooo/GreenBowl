import React from 'react'
import './pages.css'
import CloseBtn from '../components/closeBtn'
import ReturnBtn from '../components/returnBtn'
import { TextBtn } from '../components/TextBtn'
import { Chip } from '../components/Chip'

function recipe3() {
  return (
    <>
      <div className="returnBtnBox">
        <ReturnBtn Redirect="recipeStart" className="returnBtn" />
      </div>

      <div className="closeBtnBox">
        <CloseBtn className="Close" Redirect="home" />
      </div>

      <div className="recipeHeadBox">
        <p className="recipeTitle H1-B">What’s the main ingredient?</p>
        <p className="recipeBody B1-M">Add maximum 5 ingredients</p>
      </div>

      <div className="recipeInput">
        <div className="chipFrame">
          <Chip
            className="chip-instance"
            property1="default"
            text="I have no idea"
          />
          <Chip className="chip-instance" property1="default" text="Apple" />
          <Chip className="chip-instance" property1="default" text="Banana" />
          <Chip
            className="chip-instance"
            property1="default"
            text="Canned Tuna"
          />
          <Chip
            className="chip-instance"
            property1="selected"
            text="Duck Breast"
          />
          <Chip className="chip-instance" property1="default" text="Edamame" />
          <Chip className="chip-instance" property1="default" text="Fish" />
          <Chip className="chip-instance" property1="selected" text="Ginger" />
          <Chip className="chip-instance" property1="default" text="Honey" />
          <Chip className="chip-instance" property1="default" text="Jalapeno" />
          <Chip className="chip-instance" property1="default" text="Kale" />
          <Chip className="chip-instance" property1="default" text="Lemon" />
          <Chip className="chip-instance" property1="default" text="Mushroom" />
          <Chip className="chip-instance" property1="default" text="Nutmeg" />
          <Chip className="chip-instance" property1="default" text="Pecans" />
          <Chip className="chip-instance" property1="selected" text="Raisins" />
          <Chip
            className="chip-instance"
            property1="default"
            text="Strawberry"
          />
          <Chip className="chip-instance" property1="selected" text="Tomato" />
          <Chip className="chip-instance" property1="default" text="Vinegar" />
          <Chip
            className="chip-instance"
            property1="selected"
            text="Wholewheat"
          />
          <Chip className="chip-instance" property1="default" text="Zucchini" />
        </div>

    <div className='AddMainIngredientFrame'
        <TextBtn
          className="AddMainIngredient"
          property1="icon-left"
          BtnName="Add ingredient"
        />
      </div></div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="recipe4"
        />
      </div>
    </>
  )
}

export default recipe3
