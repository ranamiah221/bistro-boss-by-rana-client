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
      <Cover img={menuImg} title='menu'></Cover>
      <SectionTitle subHeader='do not miss' header='todays offer'></SectionTitle>
      <MenuCategory items={offered} ></MenuCategory>

      <MenuCategory items={dessert} img={dessertImg} title='dessert'></MenuCategory>
      <MenuCategory items={pizza} img={pizzaImg} title='pizza' ></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title='salad'></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title='soup'></MenuCategory>
        
    </div>
  );
};

export default Menu;
