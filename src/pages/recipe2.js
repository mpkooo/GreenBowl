import React from 'react'
import './pages.css'
import CloseBtn from '../components/closeBtn'
import ReturnBtn from '../components/returnBtn'
import { TextBtn } from '../components/TextBtn'
import { SingleChoiceBorder } from '../components/SingleChoiceBorder'
import Level1 from '../components/level1.svg'
import Level2 from '../components/level2.svg'
import Level3 from '../components/level3.svg'
import Slider from '../components/slider.svg'

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
          Which level of motivation do you feel for this meal?
        </p>
      </div>

      <div className="recipeInput">
        <p className="recipeRequireTitle B1-M">Healthy Level</p>
        <div className="recipeRequireBox">
          <SingleChoiceBorder
            className="singleChoiceBorder"
            property1="default"
            source={Level1}
            title="Level 1 Flexible Eating"
            bodyText="I will follow my intuitive and indulge the food I love."
          />
          <SingleChoiceBorder
            className="singleChoiceBorder"
            property1="default"
            source={Level2}
            title="Level 2 Balanced Eating"
            bodyText="I will fuel my body with the best of flavors and health."
          />
          <SingleChoiceBorder
            className="singleChoiceBorder"
            property1="default"
            source={Level3}
            title="Level 3 Targeted Eating"
            bodyText="I will have only the finest choices for my well-being."
          />
        </div>
      </div>

      <div className="recipeInput">
        <p className="recipeRequireTitle B1-M">Food Calories</p>
        <img src={Slider} className="slider" />
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="recipe3"
        />
      </div>
    </>
  )
}

export default recipe1
