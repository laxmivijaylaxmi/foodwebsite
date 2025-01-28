import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); 
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please Fill all fields");
        }
     
    };

    return (
        <>
            <div className="flex flex-col items-center mt-5 h-screen justify-center px-3 py-3  space-y-4">
                <div className="border shadow-lg p-8  sm:w-80 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <h2 className="text-3xl font-bold text-center text-white"> Login</h2>
                 
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm font-semibold">
                                Email
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
                                <AiOutlineMail className="text-gray-400 text-xl mr-2" />
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    id="email"
                                    className="w-full bg-transparent focus:outline-none"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                        </div>
                     
                        <div>
                            <label htmlFor="password" className="block text-gray-300 text-sm font-semibold">
                                Password
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
                                <AiOutlineLock className="text-gray-400 text-xl mr-2" />
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    id="password"
                                    className="w-full bg-transparent focus:outline-none"
                                    placeholder="Enter Your Password"
                                />
                                <div
                                    className="cursor-pointer" style={{color:'black'}}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>
                   
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-800 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-200"
                        >
                            Login
                        </button>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;
