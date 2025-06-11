import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Logo from "../../assets/logo.png"

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && password) {
      alert("Login Successful");
      // navigate("/example");
      // Close modal first
      // onClose();
      // Delay to allow modal to close before navigating
    setTimeout(() => {
      navigate("/dashboard");
    }, 100); // 100ms delay
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="bg-white border border-[#8478F6] rounded-xl shadow-md px-14 py-10 w-full max-w-md">
        <div className="flex justify-center mb-6">
             <img src={Logo} alt="Logo" className="w-26 h-26" />
        </div>
        <h2 className="text-center text-3xl font-bold mb-6">Super-Admin Log In</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm mb-1 text-left">User id</label>
             <input
            type="text"
            placeholder="Enter email/phone number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full border px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black-500"
            required
          />
          
          <label className="block text-sm mb-1 text-left">Password</label>
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-black-500"
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <div className="flex items-center mb-9">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="mr-2 w-4 h-4 accent-black hover:accent-black"
            />
            <label className="text-sm">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#ffb400] hover:bg-[#ffb400] text-black font-semibold py-2 rounded-full transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
