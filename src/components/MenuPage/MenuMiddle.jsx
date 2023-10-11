import React from 'react';
import './MenuMiddle.css';

function MenuMiddle() {
  return (
    <div className='menu-middle-page'>
        <div className="menu-middle-left">
            <div className="menu-left-header">
                <h5>beautiful food</h5>
            </div>
            <div className="menu-left-textmain">
                <div className="menu-text-area">
                French Experience in Guwahati and New Delhi
                </div>
            </div>
            <div className="menu-left-button">
                <button>Order</button>
            </div>
        </div>
        <div className="menu-middle-right">
            <div className="menu-right-image">
                <img src="./food7.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default MenuMiddle