import React from 'react'
import './pages.css'
import GreenBowlLogo from '../components/Logo.svg'
import { TextBtn } from '../components/TextBtn'

function EndOfOnboard() {
  return (
    <>
      <div class="TopLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div className="IntroductionPageContainer">
        <div className="IntroductionPageBox1">
          <p className="D3-B QuestionLabel">Thanks Empiko,</p>
        </div>

        <div className="IntroductionPageBox2">
          <p className="B1-M IntroductionPageLabel3">
            I have enough info for now and can help you generate something
            healthier based on your preferences :)
            <br />
            <br />
            Are you ready to start our new journey together?
          </p>
        </div>
      </div>

      <div>
        <TextBtn
          className="NextBtn"
          property1="default"
          BtnName="I'm ready"
          Redirect="home"
        />
      </div>
    </>
  )
}

export default EndOfOnboard
