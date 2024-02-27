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
           <div className="text-center mb-8">
           <button className="btn btn-outline mt-4 border-0 border-b-4">View Full Menu</button>
           </div>
        </section>
    );
};

export default PopularMenu;