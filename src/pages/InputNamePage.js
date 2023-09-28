import React from 'react';
import './pages.css';
import GreenBowlLogo from '../components/Logo.svg';
import { PlaceHolderWhite } from '../components/PlaceHolderWhite';
import { TextBtn } from '../components/TextBtn';
import ArrowLeft from '../icons/ArrowLeft.svg';

function InputNamePage() {
    return (
<>
    <div class='TopLogo'>
    <img src={GreenBowlLogo} className='GreenBowl'/>
    </div>

    <div className='InputNamePageBox'>
    <div className='InputNamePageLabel'>
        <p className='D2-B'>What should <br />
I call you?</p>
</div>
<PlaceHolderWhite className="place-holder-white-instance" property1="filled" text="Empiko" />
</div>

<div className="ArrowLeftBox">
      <img className="ArrowLeft" src={ArrowLeft} />
    </div>

<div>
    <TextBtn className='NextBtn' property1="icon-right" BtnName='Next' Redirect='introduction'/>
    </div>
</>

    );
}

export default InputNamePage;