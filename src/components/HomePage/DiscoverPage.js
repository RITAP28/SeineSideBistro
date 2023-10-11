import React from 'react';
import './DiscoverPage.css';

function DiscoverPage() {
  return (
    <>
    <div className='discover-page'>
        <div className="discover-page-heading">
            <h2>Discover French Cuisine</h2>
        </div>
        <div className="discover-foods">
          <div className="food-image">
            <img src="./food2.jpg" alt="" />
            <h4>Menu</h4>
          </div>
          <div className="food-image">
            <img src="./food5.jpeg" alt="" />
            <h4>Store</h4>
          </div>
          <div className="food-image">
            <img src="./food3.jpg" alt="" />
            <h4>Catering</h4>
          </div>
        </div>

        <div className="discover-button">
          <button className="discoverButton">
            Book a Table
          </button>
        </div>
        
    </div>
    </>
  )
}

export default DiscoverPage