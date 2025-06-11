
import React,{ useState } from 'react';
import { FaNetworkWired } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { RxDashboard } from 'react-icons/rx';
import { TbLogout } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { user} from './userData';
import ProfileCard from './ProfileCard';
import LogoutModal from './LogoutModal';
import Logo from '../../assets/logo.png';

export default function Sidebar() {
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  return (
    <>
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed w-[20%] h-screen left-0 top-0 bg-[#ffffff] shadow-lg flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center px-5 py-2">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="30 PLAY"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-black font-bold text-xl">30 PLAY</span>
            </div>
          </div>
          {/* Sidebar Items */}
          <nav className="text-base">
            <MenuItem label="Dashboard" icon={<RxDashboard />} to="/dashboard"/>
            <MenuItem label="Distributor" icon={<FaNetworkWired />} to="/distributor"/>
            <MenuItem label="Vendors" icon={<FiUsers />} to="/vendors"/>
            <MenuItem label="Quiz Result" icon={<PiListMagnifyingGlassBold />} to="/quiz-result"/>
            <MenuItem label="Commission" icon={<RiExchangeDollarFill />} to="/commission"/>
            <MenuItem label="Settings" icon={<IoSettingsOutline />} to="/settings"/>
          </nav>

          {/* Profile */}
          <div className="px-5 py-4 border-t border-[#8478F6] mt-auto">
            <div className="flex items-center gap-4" onClick={() => setShowProfile(true)}>
              <img src={user.profileImage} alt="User Avatar" className="w-12 h-12 rounded-full object-cover"/>
              <div>
                <div className="font-semibold text-[#000435]">{user.userName}</div>
                <div className="bg-[#ffb400] text-xs text-black px-2 py-0.3 mt-2 rounded-full w-max">
                  Superadmin
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-7 text-[#00435] font-semibold cursor-pointer" onClick={() => setShowLogoutModal(true)}>
                <TbLogout className="text-xl"/>
                Logout
              </div>
          </div>
        </div>
      </aside>
    </div>
    {/* Show ProfileCard when state is true */}
      {showProfile && <ProfileCard onClose={() => setShowProfile(false)} />}
    {/* Show LogoutModal */}
      {showLogoutModal && (<LogoutModal isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} />)}
    </>
  );
}

function MenuItem({ label, icon, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `flex items-center gap-3 px-4 py-4 cursor-pointer transition
        ${isActive ? 'bg-[#000435] text-white' : 'text-[#000435] hover:bg-gray-100'}`}
    >
      <span className="text-lg">{icon}</span>
      <span className="font-semibold">{label}</span>
    </NavLink>
  );
}

