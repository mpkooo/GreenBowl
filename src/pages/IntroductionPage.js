import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'
import ArrowLeft from '../icons/ArrowLeft.svg'

function IntroductionPage() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div className="ArrowLeftBox">
        <img className="ArrowLeft" src={ArrowLeft} />
      </div>

      <div className="IntroductionPageContainer">
        <div className="IntroductionPageBox1">
          <p className="D3-B QuestionLabel">Nice to meet you Empiko,</p>
          <p className="D3-B IntroductionPageLabel2">I'm Hely.</p>
        </div>

        <div className="IntroductionPageBox2">
          <p className="B1-M IntroductionPageLabel3">
            I’m your personal healthy pixie. <br />
            If you are thinking about eating or cooking something healthier,
            think of me!
            <br />
            <br />
            For better generated your healthier meal, I need to know a little
            more about you.
          </p>
        </div>
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="icon-right"
          BtnName="Next"
          Redirect="onboarding1"
        />
      </div>
    </>
  )
}

export default IntroductionPage
