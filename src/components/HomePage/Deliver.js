import React from 'react';
import './Deliver.css';

function Deliver() {
  return (
    <div className='deliver-part'>
        <div className="deliver-firsthead">
            <h2>Take it home</h2>
        </div>
        <div className="deliver-secondhead">
            <h1>We Deliver</h1>
        </div>
        <div className="deliver-buttons">
            <button className="deliverButton">
                Delivery
            </button>
            <button className="deliverButton">
                Pickup
            </button>
        </div>
    </div>
  )
}

export default Deliver