import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="content-container absolute flex flex-col gap-4 max-w-full bottom-10 left-6 sm:left-4 sm:gap-3">
        <h1 className=" font-bold text-white leading-tight sm:text-xl md:text-2xl  lg:text-4xl ">
          Crave It. Savor It. Order It.
        </h1>
        <p className="text-lg text-gray-200 sm:text-sm md:text-base  hidden lg:block ">
          Explore a world of flavors with our carefully curated menu. Find your next favorite dish and get it delivered hot and fresh!
        </p>
        <Link to="/menu">
          <button className="btn-primary">
            View Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
