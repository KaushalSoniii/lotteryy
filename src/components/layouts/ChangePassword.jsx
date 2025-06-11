import React, { useState, useRef, useEffect } from "react";

function ChangePassword({ show, onClose, currentPassword, onPasswordChange }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const modalRef = useRef(null); // reference for ChangePassword

  const handlePasswordUpdate = () => {
    if (oldPassword !== currentPassword) {
      alert("Old password is incorrect!");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New and confirm password do not match!");
      return;
    }

    onPasswordChange(newPassword); // Send new password to parent
    alert("Password updated successfully!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    onClose(); // Close modal
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/0 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-[#ffffff] p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6">Create Password</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-black">Old Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-black">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className='mt-10'>
            <label className="block mb-1 font-medium text-black">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          {/* <button
                onClick={() => setShowChangePassword(false)}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button> */}
          <button
            onClick={handlePasswordUpdate}
            className="px-10 py-2 bg-[#FFB400] text-black rounded-md font-semibold"
          >
            Set Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
