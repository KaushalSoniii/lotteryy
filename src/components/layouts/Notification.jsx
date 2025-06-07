/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { notifications } from './userData';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Notification = ({ onClose}) => {
    const [notificationList, setNotificationList] = useState(notifications);
    const notificationRef = useRef(null);

    const markAsRead = (id) => {
        setNotificationList(prev =>
            prev.map(notif =>
                notif.id === id ? { ...notif, isRead: true } : notif
            )
        );
    };
    const unreadCount = notificationList.filter(notif => !notif.isRead).length;

    // 🔁 Detect outside clicks
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-gray-500/10 flex items-center justify-center z-50 p-5">
            <div
                ref={notificationRef}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] rounded-xl shadow-xl w-[1150px] max-h-[95vh] overflow-hidden z-50"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-5 pt-7 pb-3">
                    <h3 className="text-2xl font-semibold text-gray-800">Notification</h3>
                    <IoMdCloseCircleOutline onClick={onClose} className="text-gray-700 text-2xl font-bold" />
                </div>

                {/* Notifications List */}
                <div className="overflow-y-auto max-h-[85vh] px-5 pb-5 space-y-4 hide-scrollbar">
                    {notificationList.map((notification) => (
                        <div
                            key={notification.id}
                            className={`relative p-3 rounded-xl hover:bg-[#ffffff] cursor-pointer transition-colors ${!notification.isRead ? 'bg-[#F1F1F1]' : ''
                                }`}
                            onClick={() => markAsRead(notification.id)}
                        >
                            <div className="flex items-start gap-3">
                                {/* <div className="flex-shrink-0 mt-1">
                                    <span className="text-sm">{getNotificationIcon(notification.type)}</span>
                                </div> */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-md font-medium text-gray-900">
                                            {notification.title}
                                        </h4>
                                        {!notification.isRead && (
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#8478F6] rounded-full ml-2"></div>
                                        )}
                                    </div>
                                    <p className="text-md text-left text-gray-600 mt-1 line-clamp-2">
                                        {notification.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Notification