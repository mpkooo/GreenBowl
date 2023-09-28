import React from 'react';
import './pages.css';
import GreenBowlLogo from '../components/Logo.svg';
import { PlaceHolderGrey } from '../components/PlaceHolderGrey';
import PrimaryBtn from '../components/PrimaryBtn';

function LoginPage() {
    return (
        <>
        <div class='TopLogo'>
<img src={GreenBowlLogo} className='GreenBowl'/>
</div>

<div className="LoginLabelBox">
    <div className='LoginLabel'>
      <p className="T1-SB">
        Discover something healthier,
        <br />
        Log in and let’s begin!
      </p>
      </div>
    </div>

    <div className='LoginBox'>
        <div className='LoginBox2'>
    <div className='LoginPlaceholder'>
    <PlaceHolderGrey property1="default" text='Username' />
    <PlaceHolderGrey property1="default" text='Password' />
    </div>
    <PrimaryBtn
            className='LoginPrimaryBtn' property1='default' BtnName="Let's go" Redirect='inputname'
          />
          </div>
    </div>

    </>
    )
}

export default LoginPage;