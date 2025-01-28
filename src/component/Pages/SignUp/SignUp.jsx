import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

  
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex flex-col items-center mt-32 space-y-4">
   
      <div className="border shadow-lg p-6 w-72 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>

       
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 text-sm font-semibold"
            >
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
              <AiOutlineUser className="text-gray-400 text-xl mr-2" />
              <input
                name="name"
                type="text"
                required
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                placeholder="Enter Your Name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-semibold"
            >
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
              <AiOutlineMail className="text-gray-400 text-xl mr-2" />
              <input
                name="email"
                type="email"
                required
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                placeholder="Enter Your Email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-300 text-sm font-semibold"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
              <AiOutlineLock className="text-gray-400 text-xl mr-2" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                placeholder="Enter Your Password"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(false)}
                  className="cursor-pointer text-gray-500"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(true)}
                  className="cursor-pointer text-gray-500"
                />
              )}
            </div>
          </div>

      
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-300 text-sm font-semibold"
            >
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
              <AiOutlineLock className="text-gray-400 text-xl mr-2" />
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                placeholder="Confirm Your Password"
              />
              {showConfirmPassword ? (
                <FaEyeSlash
                  onClick={() => setShowConfirmPassword(false)}
                  className="cursor-pointer text-gray-500"
                />
              ) : (
                <FaEye
                  onClick={() => setShowConfirmPassword(true)}
                  className="cursor-pointer text-gray-500"
                />
              )}
            </div>
          </div>

    
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full py-2 bg-teal-800 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-200"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>

      <div className="text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-teal-400 hover:underline">
          Login here
        </Link>
        .
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
