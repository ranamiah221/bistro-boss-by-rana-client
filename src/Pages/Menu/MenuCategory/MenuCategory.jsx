import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items}) => {
    return (
        <div>
             <div className="grid lg:grid-cols-2 gap-10 mb-10 mt-10">
                {
                    items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;