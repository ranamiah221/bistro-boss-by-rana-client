import { FaRemoveFormat } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Carts = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl font-medium ">Total Order : {cart.length}</h2>
        <h2 className="text-4xl font-medium ">Total Prize : {totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item, idx)=><tr key={item._id}>
                    <th>{idx+1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Delete</button>
                    </th>
                  </tr>)
            }
          </tbody>
       
         
        </table>
      </div>
    </div>
  );
};

export default Carts;
