import React from 'react';
import Header from './components/HomePage/Header';
import IntroPage from './components/HomePage/IntroPage';
import DiscoverPage from './components/HomePage/DiscoverPage';
import Deliver from './components/HomePage/Deliver';
import ReceiveEmail from './components/HomePage/ReceiveEmail';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/MenuPage/Menu';
import Reservation from './components/ReservationPage/Reservation';
import Groups from './components/GroupsPage/Groups';
import Catering from './components/CateringPage/Catering';
import GiftCard from './components/GiftCardPage/GiftCard';
import Reward from './components/RewardsPage/Reward';
import Orders from './components/OrderPage/Orders';

function Restaurant() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/groups' element={<Groups />} />
      <Route path='/catering' element={<Catering />} />
      <Route path='/giftcards' element={<GiftCard  />} />
      <Route path='/rewards' element={<Reward />} />
      <Route path='/orders' elemnt={<Orders />} />
    </Routes>
    <div className='card-container'>
      <IntroPage />
      <DiscoverPage />
      <Deliver />
      <ReceiveEmail />

    </div>
    </>
  )
}

export default Restaurant