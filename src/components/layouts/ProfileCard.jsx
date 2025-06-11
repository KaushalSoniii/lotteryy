import React, { useState, useEffect, useRef } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md';
import { user } from './userData';
import EditProfile from './EditProfile';

function ProfileCard({ onClose }) {
  const [balance, setBalance] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const profileRef = useRef(null); // reference for profile card


  const handleRecharge = () => {
    if (balance) {
      alert(`Recharged ₹${balance}`);
      setBalance("");
    }
  };

  // Detect outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!showEditProfile && profileRef.current && !profileRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, showEditProfile]);

  return (
    <>
      <div className="fixed inset-0 bg-gray-500/20 flex items-center justify-center z-50">
        <div ref={profileRef} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] p-7 rounded-xl shadow-xl w-120 h-110 z-50">
          <div className="flex items-center justify-between mb-4 border border-gray-300 p-6 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="">
                <img src={user.profileImage} alt="User Avatar" className="w-15 h-15 rounded-full object-cover" />
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold">{user.userName}</h2>
                <p className="text-lg text-gray-500 text-left">Superadmin</p>
              </div>
            </div>
            <button className="text-indigo-800 border-none rounded-full p-2 bg-[#78A4F6] cursor-pointer"
              onClick={() => setShowEditProfile(true)}
            >
              <MdOutlineEdit />
            </button>
          </div>

          <div className="space-y-2 text-lg">
            <div className="flex justify-between">
              <span className="">SuperAdmin</span>
              <span className="font-medium">{user.superAdmin}</span>
            </div>
            <div className="flex justify-between">
              <span className="">Phone Number</span>
              <span className="font-medium">{user.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="">Address</span>
              <span className="font-medium">{user.address}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="">Password</span>
              <div className="flex items-center space-x-2 font-medium">
                <span className="text-black flex items-center gap-2">
                  {showPassword ? "mypassword" : "••••••••"}
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="focus:outline-none"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <label className="block text-lg font-medium mb-1 text-left">
              Add Balance
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Add Balance"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
              <button
                onClick={handleRecharge}
                className="px-4 py-3 border border-gray-300 rounded-md text-black hover:bg-[#ffb400]"
              >
                Recharge
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Show EditProfile when state is true */}
      {showEditProfile && (<EditProfile onClose={() => setShowEditProfile(false)} setShowEditProfile={setShowEditProfile} />)}
    </>
  );
}

export default ProfileCard;