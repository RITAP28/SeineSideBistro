import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <div className='header-main'>
        <div className="header-logo">
            {/* <img src="./BurgerKing2.png" alt="" /> */}
            <Link to="/" style={{textDecoration:"none"}} ><h4>Seine Side Bistro</h4></Link>
        </div>
        <div className="header-elements">
          <ul className="header-options">
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservation">Reservations</Link>
            </li>
            <li>
              <Link to="/groups">Groups</Link>
            </li>
            <li>
              <Link to="/catering">Catering</Link>
            </li>
            <li>
              <Link to="/giftcards">Gift Card</Link>
            </li>
            <li>
              <Link to="/rewards">Rewards</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
        <Link to="/orderpage">
            <button className='header-button'>
                 Order 
            </button>
        </Link>
        </div>
    </div>
    </>
  )
}

export default Header