import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-amber-500 min-h-full">
                  <ul className="menu p-5">
                    <li><NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My cart</NavLink></li>
                    <li><NavLink to='/dashboard/review'> <FaAd></FaAd>Add a Review</NavLink></li>
                    <li><NavLink to='/dashboard/booking'> <FaList></FaList> My Booking</NavLink></li>
                    <div className="divider"></div>

                    <li><NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/order/salad'> <FaSearch></FaSearch>Menu</NavLink></li>
                  </ul>
            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;