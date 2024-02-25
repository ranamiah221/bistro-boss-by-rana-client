

const MenuItem = ({item}) => {
    const{name, image, recipe, price}=item;
    return (
        <div className="flex space-x-4 mt-4">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px] " src={image} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 font-medium text-xl">${price}</p>
        </div>
    );
};

export default MenuItem;