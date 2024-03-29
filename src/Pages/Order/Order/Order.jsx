import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
    const categories=['salad', 'pizza', 'soup','dessert','drinks'];
    const {category}=useParams();
    const initialIndex= categories.indexOf(category);
    const [tabIndex, setTabIndex]=useState(initialIndex);
    const [menu]= useMenu();
    const dessert= menu.filter(item=> item.category==='dessert')
    const soup= menu.filter(item=> item.category==='soup')
    const salad= menu.filter(item=> item.category==='salad')
    const drinks= menu.filter(item=> item.category==='drinks')
    const pizza= menu.filter(item=> item.category==='pizza')
  
  return (
    <div>
      <Cover img={coverImg} title="order food"></Cover>
       <div className="mt-10 ">
       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList style={{textAlign: "center", color: 'black', fontSize:'20px',fontWeight:'700', width:'500px', margin: 'auto'}}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
         
        </TabList>
        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
             <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab> 
        </TabPanel>
        
      </Tabs>
       </div>
    </div>
  );
};

export default Order;
