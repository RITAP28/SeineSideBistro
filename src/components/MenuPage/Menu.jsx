import React from 'react';
import MenuHeader from './MenuHeader';
import './Menu.css';
import MenuMiddle from './MenuMiddle';
import MenuFeatured from './MenuFeatured';
import MenuOptions from './MenuOptions';
import MenuEnding from './MenuEnding';

function Menu() {

  return (
    <div className='mainMenu'>
        <MenuHeader />
        <MenuMiddle />
        <MenuFeatured />
        <MenuOptions />
        <MenuEnding />
    </div>
  )
}

export default Menu