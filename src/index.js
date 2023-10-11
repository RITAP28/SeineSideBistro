import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorpage from './routes/Errorpage';
import Menu from './components/MenuPage/Menu';
import Reservation from './components/ReservationPage/Reservation';
import Groups from './components/GroupsPage/Groups';
import Catering from './components/CateringPage/Catering';
import GiftCard from './components/GiftCardPage/GiftCard';
import Reward from './components/RewardsPage/Reward';
import Orders from './components/OrderPage/Orders';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },{
        path: "menu",
        element: <Menu />
    },{
        path: "reservation",
        element: <Reservation />
    },{
        path: "groups",
        element: <Groups />
    },{
        path: "catering",
        element: <Catering />
    },{
        path: "giftcards",
        element: <GiftCard />
    },{
        path: "rewards",
        element: <Reward />
    },{
        path: "orders",
        element: <Orders />,
        errorElement: <Errorpage />
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
  
);

