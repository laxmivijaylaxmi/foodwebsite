
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/MainLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search");
  const animationSequences = [
    "Search 'rolls'",
    "Search 'sandwich'",
    "Search 'deserts'",
    "Search 'salad'",
    "Search 'cake'",
    "Search 'pure-veg'",
    "Search 'pasta'",
    "Search 'noddles'",
    "Search 'non-veg'",
  ];

  useEffect(() => {
    let index = 0;
    const updatePlaceholder = () => {
      setPlaceholder(animationSequences[index]);
      index = (index + 1) % animationSequences.length;
    };

    const interval = setInterval(updatePlaceholder, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black p-4 shadow-md w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="ml-3 h-16 w-16 sm:h-16 sm:w-16 hover:scale-110 transition-transform duration-300 cursor-pointer rounded-full object-cover"
            />
          </NavLink>
          <span className="text-xl ml-6 md:text-2xl hidden lg:block animated-gradient">
            DineDash
          </span>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            {menuOpen ? (
              <FaTimes size={20} color="white" />
            ) : (
              <FaBars size={20} color="white" />
            )}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center lg:space-x-6 mt-4 lg:mt-0`}
        >
          <div className="relative flex items-center">
            <SearchIcon className="text-white mr-2" />
            <input
              type="text"
              placeholder={placeholder}
              className="bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none"
            />
          </div>

          <Link
            to="/menu"
            className="text-gray-200 font-bold mb-2 lg:mb-0"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>

          <Link
            to="/signup"
            className="text-gray-200 font-bold mb-2 lg:mb-0"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            className="text-gray-200 font-bold mb-2 lg:mb-0"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/contact"
            className="text-gray-200 font-bold mb-2 lg:mb-0"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/cart"
            className="text-gray-200 font-bold mb-2 lg:mb-0 px-3 py-2 rounded-full bg-orange-600 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <AiOutlineShoppingCart size={23} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
