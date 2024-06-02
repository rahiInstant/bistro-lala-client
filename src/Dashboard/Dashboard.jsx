import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBook, FaHouseUser, FaUsers, FaUtensils } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosHome } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [data, isPending, loading] = useAdmin();
  // console.log('from dashboard', data)
  if (isPending || loading) {
    return "wait Again...";
  }
  // console.log(data)
  // const isAdmin = true;
  return (
    <div className="flex max-w-[1320px] mx-auto bg-[#f7f6f6]">
      <div className="w-64 bg-orange-500">
        <ul className="p-4 font-semibold flex flex-col gap-2">
          {data?.isAdmin ? (
            <>
              <NavLink to="/dashboard/admin-home">
                <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
                  <FaHouseUser />
                  Admin Home
                </li>
              </NavLink>
              <NavLink to="/dashboard/add-item">
                <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
                  <FaUtensils />
                  Add Item
                </li>
              </NavLink>
              <NavLink to="/dashboard/manage-bookings">
                <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
                  <FaBook />
                  Manage Bookings
                </li>
              </NavLink>
              <NavLink to="/dashboard/all-users">
                <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
                  <FaUsers />
                  All Users
                </li>
              </NavLink>
            </>
          ) : (
            <>
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
            </>
          )}
          <hr className="my-3" />
          <NavLink to="/">
            <li className="p-2 bg-orange-300 rounded-md flex items-center gap-1">
              <IoIosHome />
              Home
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
