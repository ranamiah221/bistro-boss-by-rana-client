import { Link } from "react-router-dom";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";


const MenuCategory = ({items, img, title}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover> 
            }
             <div className="grid lg:grid-cols-2 gap-10 mb-10 mt-10">
                {
                    items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
           <div className="flex justify-center mb-10">
         
           {
            title &&   <Link to={`/order/${title}`}>
            <button className="btn btn-outline mt-4 border-0 border-b-4">View full of Menu</button>
            </Link>
           }
         
           </div>
        </div>
    );
};

export default MenuCategory;