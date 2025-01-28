import React from "react";
import Logo from "../../assets/MainLogo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-16 px-6 sm:px-10 py-8 bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-md">
 
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
      
        <div className="mb-6 sm:mb-0 flex flex-col items-center sm:items-start">
          <img
            src={Logo}
            className="h-28 w-28 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
            alt="DineDash Logo"
          />
          <h1 className="text-2xl font-bold hidden lg:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient mt-2">
            DineDash
          </h1>
        </div>

      
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:text-gray-400 transition duration-300" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center sm:text-left text-gray-400">
        <p>Contact Us: +1 (234) 567-890</p>
        <p>Email: info@dinedash.com</p>
        <p>Address: 123 Main St., Flavor Town, FT 56789</p>
      </div>

    
      <div className="mt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} DineDash. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
