import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const modalRef = useRef(null); // 🔁 Reference to modal card

    const handleLogout = () => {
        onClose(); // Close modal first
        setTimeout(() => {
            navigate("/");
        }, 150);
    };
    
    // 🔁 Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/20 z-50">
            <div ref={modalRef} className="bg-[#ffffff] p-6 rounded-xl shadow-lg w-full max-w-sm text-center relative">
                <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-2xl">?</div>
                </div>
                <p className="font-semibold text-lg mb-6">Do you really want to log-out?</p>
                <div className="flex justify-between gap-4">
                    <button
                        onClick={onClose}
                        className="w-1/2 border border-gray-400 text-black py-2 rounded-md hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-1/2 bg-[#ffb400] hover:bg-[#ffb400] text-black font-semibold py-2 rounded-md"
                    >
                        Yes log-out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;