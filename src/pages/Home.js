import React from 'react'
import PrimaryBtn from '../components/PrimaryBtn'
import SecondaryBtn from '../components/SecondaryBtn'
import GreenBowlLogo from '../components/Logo.svg'
import recipeImage from '../components/recipeimage.svg'
import plate1 from '../components/plate1.svg'
import plate2 from '../components/plate2.svg'
import plate5 from '../components/plate5.svg'
import '../components/style.css'
import './pages.css'
import '../index.css'

function Home() {
  return (
    <>
      <div class="HomeLogo">
        <img src={GreenBowlLogo} className="GreenBowl" />
      </div>

      <div className="HomeContainer">
        <div className="HomeBox1">
          <p className="D1-B HomeLabel1">Hi Empiko,</p>
        </div>

        <div className="HomeBox2">
          <p className="T2-M HomeLabel2">
            Do you need something healthier today?
          </p>
        </div>
      </div>

      <div className="featureBox">
        <div className="recipeBox">
          <div class="recipeImageFrame">
            <img src={recipeImage} className="recipeImage" />
          </div>

          <div className="textFrame">
            <div className="textWrap">
              <div className="T1-SB text-wrapper">Cook It Up!</div>
              <div className="B1-R your-personalized">
                Your personalized enchanted recipes
              </div>
            </div>
            <SecondaryBtn
              className="secondary-btn-instance"
              divClassName="secondary-btn-instance-div"
              BtnName="Create recipes"
              Redirect="recipestart"
            />
          </div>
        </div>

        <div className="menuBox">
          <div class="plate1Frame">
            <img src={plate1} className="plate1" />
          </div>
          <div class="plate2Frame">
            <img src={plate2} className="plate2" />
          </div>
          <div class="plate5Frame">
            <img src={plate5} className="plate5" />
          </div>
          <div className="textFrame">
            <div className="textWrap">
              <div className="T1-SB text-wrapper">Eats Cast</div>
              <div className="B1-R your-personalized">
                Let me help you find your menu for the day
              </div>
            </div>
            <SecondaryBtn BtnName="Random menus" Redirect="menustart" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
