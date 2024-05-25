import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaHouseUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { CiBookmarkPlus } from "react-icons/ci";
const Dashboard = () => {
  return (
    <div className="flex max-w-[1320px] mx-auto">
      <div className="w-64 h-screen bg-orange-500">
        <ul className="p-4 font-semibold flex flex-col gap-2">
          <NavLink to="/dashboard/user-home">
            <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
              <FaHouseUser />
              User Home
            </li>
          </NavLink>
          <NavLink to="/dashboard/cart">
            <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
              <HiOutlineShoppingCart />
              My Cart
            </li>
          </NavLink>
          <NavLink to="/dashboard/reservation">
            <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
              <FaRegCalendarAlt />
              Reservation
            </li>
          </NavLink>
          <NavLink to="/dashboard/review">
            <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
            <FcRating />
              Review
            </li>
          </NavLink>
          <NavLink to="/dashboard/booking">
            <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
            <CiBookmarkPlus />
              My order
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
