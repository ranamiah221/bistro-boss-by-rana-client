import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems= data.filter(item=> item.category === 'popular'); 
            setMenu(popularItems)})
    },[])

    return (
        <section>
            <SectionTitle subHeader='check it out' header='from our menu'></SectionTitle>
            <div className="grid lg:grid-cols-2 gap-10 mb-10">
                {
                    menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;