import { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[1920px] mx-auto  fixed z-40 w-full backdrop-blur-md bg-[#00000075] shadow ">
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
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <button
                className="hidden mx-4 text-white text-3xl transition-colors duration-300 transform lg:block  focus:outline-none"
                aria-label="show notifications"
              >
                <CiBellOn />
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src=""
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
