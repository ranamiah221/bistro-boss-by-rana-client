import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const[cart]=useCart();
    const isAdmin=true;
    return (
        <div className="flex">
            <div className="w-64 bg-amber-500 min-h-full">
                  <ul className="menu p-5">
                    {
                        isAdmin ? <>
                        <li><NavLink to='/dashboard/adminHome'> <FaHome></FaHome>Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/addItems'> <FaUtensils></FaUtensils> Add Items </NavLink></li>
                        <li><NavLink to='/dashboard/manageItems'> <FaList></FaList>Manage Items</NavLink></li>
                        <li><NavLink to='/dashboard/manageBookings'> <FaBook></FaBook>Manage Bookings</NavLink></li>
                        <li><NavLink to='/dashboard/allUsers'> <FaUsers></FaUsers>All Users</NavLink></li>
                       </>:
                       <>
                        <li><NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink></li>
                        <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My cart ({cart.length})</NavLink></li>
                        <li><NavLink to='/dashboard/review'> <FaAd></FaAd>Add a Review</NavLink></li>
                        <li><NavLink to='/dashboard/booking'> <FaList></FaList> My Booking</NavLink></li>
                       </>
                    }
                    
                    <div className="divider"></div>

                    <li><NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/order/salad'> <FaSearch></FaSearch>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'> <FaVoicemail></FaVoicemail>Contract</NavLink></li>
                  </ul>
            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;