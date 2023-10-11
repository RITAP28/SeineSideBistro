import React from 'react';
import './MenuHeader.css';

function MenuHeader() {
  return (
    <div className='menu-header-main'>
        <div className="menu-header-logo">
            <h4>Seine Side Bistro</h4>
        </div>
        <div className="menu-header-list">
            <ul>
                <li>About</li>
                <li>Groups</li>
                <li>Catering</li>
                <li>Rewards</li>
                <li>Gift Cards</li>
            </ul>
        </div>
        <div className="menu-header-button">
            <button>
                Book
            </button>
        </div>
        <div className="menu-header-icons">
            <img src="./search1.png" alt="" />
            <img src="./profile.png" alt="" />
            <img src="./cart1.png" alt="" />
        </div>
        
    </div>
  )
}

export default MenuHeader