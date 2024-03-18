import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-amber-500 min-h-full">
                  <ul className="menu">
                    <li><NavLink to='/dashboard/cart'>My cart</NavLink></li>
                  </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;