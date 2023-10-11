import React, {useState} from 'react';
import './MenuFeatured.css';
import MenuCarousel from './MenuCarousel';

function MenuFeatured() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      image: require("./frenchFoods/Bouillabaisse.jpg"),
      name: 'Bouillabaisse',
      price: 'US$23.00'
    },{
      image: require("./frenchFoods/boeufbourguignon2.jpg"),
      name: 'Boeuf Bourguignon',
      price: 'US$23.00'
    },{
      image: require("./frenchFoods/Cassoulet.jpg"),
      name: 'Cassoulet',
      price: 'US$23.00'
    },{
      image: require("./frenchFoods/ChickenConfit.jpg"),
      name: 'Chicken Confit',
      price: 'US$23.00'
    },{
      image: require("./frenchFoods/CroqueMonsiuer.jpg"),
      name: 'Croque Monsiuer',
      price: 'US$23.00'
    },{
      image: require("./frenchFoods/FrangipaneTart.jpg"),
      name: 'Frangipane Tart',
      price: 'US$23.00'
    },{
      image: require("./frenchFoods/FrenchOnionSoup.jpg"),
      name: 'French Onion Soup',
      price: 'US$23.00'
    },{
      image: require("./frenchFoods/HazelnutDacquoise.jpg"),
      name: 'Hazelnut Dacquoise',
      price: 'US$23.00'
    },{
      image: require("./frenchFoods/LambShankNavarin.jpg"),
      name: 'Lamb Shankar Nath',
      price: 'US$23.00'
    },{
      image: require("./frenchFoods/ParisBrest.jpg"),
      name: 'Paris Brest',
      price: 'US$23.00'
    }
  ]


  const updateIndex = (newIndex) => {
    if(newIndex < 0){
      newIndex = (items.length - 1);
    } else if(newIndex >= items.length){
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }


  return (
    <div className='menu-featured'>
        <div className="menu-featured-header">
        <div className="menu-featured-header-left">
            Featured Items
        </div>
        <div className="menu-featured-header-right">
            <div className="menu-featured-button">
            <button className="navigate before" onClick={() => {
              updateIndex(activeIndex - 1);
            }}>
                <img src="./beforeButton.png" alt="" />
            </button>
            <button className="navigate after" onClick={() => {
              updateIndex(activeIndex + 1);
            }}>
                <img src="./nextButton.png" alt="" />
            </button>
            </div>
        </div>
        </div>

        <div className="menu-featured-carousel">
          {items.map((item) => {
            return <MenuCarousel item={item} />
          })};
        </div>
    </div>
  )
}

export default MenuFeatured