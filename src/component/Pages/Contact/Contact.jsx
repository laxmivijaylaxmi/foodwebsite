import React from 'react';
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className=" mt-16 text-white text-center py-16 px-4 relative min-h-screen">

      <motion.h1 
        className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>
      
      <motion.p 
        className="text-lg text-gray-300 mb-12 max-w-lg mx-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Feel free to drop me a message! I’d love to hear about your projects or opportunities to work together.
      </motion.p>

   
      <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-md max-w-sm mx-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <form>
        
          <div className="mb-4">
            <label className="block text-left text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 rounded-md bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          
         
          <div className="mb-4">
            <label className="block text-left text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
       
          <div className="mb-4">
            <label className="block text-left text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message"
              className="w-full p-2 rounded-md bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>
          
  
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full shadow-md transform transition-transform duration-300 text-sm"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      
    
      <motion.div
        className="mt-12 space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="flex items-center justify-center space-x-2">
          <AiOutlineMail className="text-xl text-blue-400" />
          <span>vrvijayalaxmi@gmail.com</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <AiOutlinePhone className="text-xl text-green-400" />
          <span>+91 8810500328</span>
        </p>
        <motion.button
          className="mt-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white py-2 px-4 rounded-full transform transition-transform duration-300 text-sm"
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Contact;
