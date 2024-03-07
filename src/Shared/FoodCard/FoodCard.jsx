const FoodCard = ({item}) => {
    const{name, image, recipe, price}=item;
    const handleAddToCart=(food)=>{
          console.log(food);
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className=" text-white bg-black absolute right-0 mt-4 mr-8 rounded-lg pl-2 pr-2 text-xl font-medium">{price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 bg-gray-200 border-b-4 border-yellow-500">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
