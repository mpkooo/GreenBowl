import React from 'react'
import PrimaryBtn from '../components/PrimaryBtn'
import SecondaryBtn from '../components/SecondaryBtn'
import GreenBowlLogo from '../components/Logo.svg'
import '../components/style.css'
import './pages.css'
import '../index.css'

function Landing() {
  return (
    <div>
      <div className="LoginBox">
        <div className="LoginTitle">
          <p className="D1-B">Welcome,</p>
          <p className="T1-SB">I'm here to help you become healthier.</p>
        </div>
      </div>

      <div className="center-container">
        <img src={GreenBowlLogo} className="GreenBowl" alt="Green Bowl" />
      </div>

      <div className="LoginBtnFrame">
        <PrimaryBtn
          className="DesignPrimaryBtn"
          property1="default"
          BtnName="Log in"
          Redirect="login"
        />

        <SecondaryBtn className="DesignSecondaryBtn" text="Sign up" />
      </div>
    </div>
  )
}

export default Landing
