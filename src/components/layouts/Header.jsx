/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { LuBell } from "react-icons/lu";
import { user, notifications } from './userData';
import ProfileCard from "./ProfileCard";
import Notification from "./Notification";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationList, setNotificationList] = useState(notifications);

const unreadCount = notificationList.filter(notif => !notif.isRead).length;

  return (
    <>
      <header
        className="fixed top-0 w-[80%] right-0 bg-[#ffffff] px-6 py-2 z-50"
        style={{
          boxShadow: "5px 4px 6px -1px rgba(0,0,0,0.1)",
          backgroundColor: "white",
        }}
      >
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center gap-2"></div>

          {/* Right side content (notification + profile) */}
          <div className="flex items-center gap-4 relative">
            {/* Bell Icon */}
            <div className="relative mr-2">
              <LuBell
                className="w-8 h-8 text-[#0A0E3F] cursor-pointer"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                onClick={() => setShowNotifications(true)}
              />
              <span className="absolute -top-1 -right-1 bg-[#A62422] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            </div>

            {/* Profile Picture */}
            <img
              src={user.profileImage}
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover cursor-pointer"
              onClick={() => setShowProfile(true)} // open profile card on click
            />
          </div>
        </div>
      </header>

      {/* Show ProfileCard when state is true */}
      {showProfile && <ProfileCard onClose={() => setShowProfile(false)} />}
        {/* Show Notification when state is true */}
      {showNotifications && <Notification onClose={() => setShowNotifications(false)} notificationList={notificationList} setNotificationList={setNotificationList} />}
    </>
  );
};

export default Header;
