import React from 'react';
import './IntroPage.css';

function IntroPage() {
  return (
    <div className='Intro'>
        <div className="intro-left">
        <img src="./food1.jpg" alt="" />
        </div>
        <div className="intro-right">
            <div className="intro-right-header">
            <h2>Seine Side</h2>
            <h3>Bistro</h3>
            </div>
            <div className="intro-right-secondmain">
            <h5>French Food and Wine Experience</h5>
            <p> in Guwahati City</p>
            </div>
            <div className="intro-right-thirdmain">
            <p>Seine Side Bistro is a French restaurant, famous for its Coq au Vin, flavourful Bouillabaisse, delicious Croissants, Escargot, mouth-watering Macarons, and of course, unique luscious French wines.</p>
            </div>
            <div className="intro-right-ending">
                <p>Ready to try our satisfying Georgian food and gorgeous wine? Find us in Downtown Palo Alto or Los Altos (reservations recommended) or order delivery.</p>
            </div>
            <div className="intro-right-button">
                <button className='right-button'>
                    Menu
                </button>
            </div>
        </div>
    </div>
  )
}

export default IntroPage