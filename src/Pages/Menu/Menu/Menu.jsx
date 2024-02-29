import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";


const Menu = () => {
  const [menu]=useMenu();
  const offered= menu.filter(item=> item.category==='offered')
  const dessert= menu.filter(item=> item.category==='dessert')
  const soup= menu.filter(item=> item.category==='soup')
  const salad= menu.filter(item=> item.category==='salad')
  // const drinks= menu.filter(item=> item.category==='drinks')
  const pizza= menu.filter(item=> item.category==='pizza')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/*  */}
      <Cover img={menuImg} title='our menu'></Cover>
      <SectionTitle subHeader='do not miss' header='todays offer'></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      <Cover img={dessertImg} title='our dessert items'></Cover>
      <MenuCategory items={dessert}></MenuCategory>

      <Cover img={pizzaImg} title='our pizza'></Cover>
      <MenuCategory items={pizza}></MenuCategory>

      <Cover img={saladImg} title='our salad'></Cover>
      <MenuCategory items={salad}></MenuCategory>
      
      <Cover img={soupImg} title='our soup'></Cover>
      <MenuCategory items={soup}></MenuCategory>
        
    </div>
  );
};

export default Menu;
