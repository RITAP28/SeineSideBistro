import React from 'react';
import './MenuOptions.css';

function MenuOptions() {
  return (
    <div className='menu-options'>
      <div className="menu-header">
        <h3>
        Seine Side Menu
        </h3>
        <p>
          Beautiful food designed over centuries
        </p>
      </div>
        <div className="first-grid-row">
          <div className="first-row first-column">
            <h4>Small Plates</h4>
            <button className='onPage-btn'>Shop Now</button>
          </div>
          <div className="first-row second-column">
            <h4>Soups and Salads</h4>
            <button className='onPage-btn'>Shop Now</button>
          </div>
          <div className="first-row third-column">
            <h4>Essentials</h4>
            <button className='onPage-btn'>Shop Now</button>
          </div>
        </div>
        <div className="second-grid-row">
          
          <div className="second-row second-first-column">
            <h4>Meat and Fish</h4>
            <button className='sec-onPage-btn'>Shop Now</button>
          </div>
          <div className="second-row second-second-column">
            <h4>White and Amber Wine</h4>
            <button className='sec-onPage-btn'>Shop Now</button>
          </div>
          <div className="second-row second-third-column">
            <h4>Red Wine</h4>
            <button className='sec-onPage-btn'>Shop Now</button>
          </div>
          <div className="second-row second-fourth-column">
            <h4>Desserts</h4>
            <button className='sec-onPage-btn'>Shop Now</button>
          </div>
        </div>
    </div>
  )
}

export default MenuOptions