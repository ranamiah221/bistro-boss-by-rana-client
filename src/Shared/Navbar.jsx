import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Pages/component/Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log Out Successful",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
  const navOptions = (
    <>
     <li> <NavLink to="/">Home</NavLink> </li>
     <li> <NavLink to="/menu">Our Menu</NavLink> </li>
     <li> <NavLink to="/order/salad">Order Food</NavLink> </li>
     <li><NavLink to='/'>
              <FaShoppingCart></FaShoppingCart>
                     <div className="badge">+0</div>
           </NavLink>
      </li>
    {
      user? <>
      {/* <span>{user?.displayName}</span> */}
      <button className="btn-outline text-white px-2 rounded-lg" onClick={handleLogOut}>Log Out</button></>:
      <><li> <NavLink to="/login">Login</NavLink> </li></>
    }
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-2xl text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-medium text-white">Bistro Boss</h2>
          <p className="text-2xl font font-medium text-white">R e s t a u r a n t</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
