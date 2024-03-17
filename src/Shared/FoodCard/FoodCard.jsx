import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const { user } = useAuth();
  const navigate= useNavigate();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      // send Todo data in the database;
    } else {
      Swal.fire({
        title: "You are not login!!",
        text: "Please Logged In add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login ",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className=" text-white bg-black absolute right-0 mt-4 mr-8 rounded-lg pl-2 pr-2 text-xl font-medium">
        {price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 bg-gray-200 border-b-4 border-yellow-500"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
