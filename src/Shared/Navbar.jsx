import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import { HiOutlineShoppingCart } from "react-icons/hi";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const successMsg = (msg) => toast.success(msg);
  const [orderNumber] = useCart();
  // console.log(orderNumber)
  function handleLogOut() {
    logOut()
      .then(() => successMsg("Log out successfully."))
      .catch((err) => console.log(err));
  }
  return (
    <nav className="max-w-[1920px] mx-auto top-0 left-0  fixed z-40 w-full backdrop-blur-md bg-[#00000075] shadow ">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between ">
            <a href="#">
              <img className="w-full h-10" src="/home_logo.png" alt="Logo" />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                  xmlns=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                  xmlns=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <NavLink
                to="/"
                className="px-3 py-2 mx-3 mt-2 text-[#fff] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-[#ffffff5b] "
              >
                Home
              </NavLink>
              <NavLink
                to="/our-menu"
                className="px-3 py-2 mx-3 mt-2 text-[#fff] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-[#ffffff5b] "
              >
                Our Menu
              </NavLink>
              <NavLink
                to="/our-shop/popular"
                className="px-3 py-2 mx-3 mt-2 text-[#fff] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-[#ffffff5b] "
              >
                Our Shop
              </NavLink>
              <NavLink
                to="/our-menu"
                className="px-3 py-2 mx-3 mt-2 text-[#fff] transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-[#ffffff5b] "
              >
                Contact Us
              </NavLink>
              <Link to="dashboard/cart">
                <div className=" rounded-lg px-3 py-2 flex gap-1 items-center transition-colors duration-300 transform  hover:bg-[#ffffff5b] text-white  ">
                  <div className=" text-xl">
                    <HiOutlineShoppingCart />
                  </div>
                  <p className="px-1 bg-pink-600 font-medium rounded-full">
                    {user ? orderNumber?.length : 0}
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              {user ? (
                <button
                  onClick={() => handleLogOut()}
                  className="rounded-lg border-2 border-red-500 px-3 py-2 text-white"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="rounded-lg border-2 border-green-500 px-3 py-2 text-white">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
