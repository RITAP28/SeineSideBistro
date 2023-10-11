import React from 'react';
import './MenuCarousel.css';

function MenuCarousel({item}) {
  return (
    <>
    <div className="menu-fearured-card">
    <div className="menu-item-image">
           <img src={item.image} alt="" />
         </div>
         <div className="menu-item-name">
          <h4>{item.name}</h4>
         </div>
         <div className="menu-item-price">
          <p>{item.price}</p>
         </div>
         </div>
      </>
  )
}

export default MenuCarousel