import React from 'react';
import './HeaderElements.css';

function HeaderElements({ title }) {
  return (
    <div className='HeaderElements'>
        <div className="Header-titles">
            { title }
        </div>
    </div>
  )
}

export default HeaderElements