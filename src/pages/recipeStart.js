import React from 'react'
import './pages.css'
import Pencil from '../components/pencil.svg'
import Close from '../icons/Close.svg'
import PrimaryBtn from '../components/PrimaryBtn'
import CloseBtn from '../components/closeBtn'

function recipeStart() {
  return (
    <>
      <div class="pencilBox">
        <img src={Pencil} className="pencil" />
      </div>

      <div className="closeBtnBox">
        <CloseBtn className="Close" Redirect="home" />
      </div>

      <div className="StartBox">
        <div className="H1-B StartTitle">
          Need recipes? <br />
          You are in good (magic) hands{' '}
        </div>

        <div className="B1-M StartBody">
          "Cook It Up!" can help you create healthy substitute recipes based on
          your choices. Everything, from the ingredients to the flavor, degree
          of health, cooking time, and level of complexity, is up to you!
          <br />
          <br /> Last but not least, after you select the ideal recipe, I will
          lead and accompany you as you go through the cooking journey step by
          step.
          <br />
          <br /> Keep going if you can because a wonderful experience is waiting
          there:)
        </div>
      </div>

      <div className="StartBtnBox">
        <PrimaryBtn
          className="StartBtn"
          property1="default"
          BtnName="Start"
          Redirect="recipe1"
        />
      </div>
    </>
  )
}

export default recipeStart
