import React, { useState, useEffect, useRef } from 'react';
import { user } from './userData';
import ChangePassword from './ChangePassword';

function EditProfile({ onClose, setShowEditProfile }) {
    const [formData, setFormData] = useState({
        name: user.userName,
        phone: user.phone,
        address: user.address,
        password: "mypassword",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);

    const profileRef = useRef(null); // reference for edit profile

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleDone = () => {
        console.log("Profile Updated:", formData);
        onClose()
    };

    // Detect outside clicks
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!showChangePassword && profileRef.current && !profileRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose, showChangePassword]);

    return (
        <div className="fixed inset-0 bg-gray-500/0 flex items-center justify-center z-50">
            <div ref={profileRef} className="bg-[#ffffff] w-full max-w-2xl rounded-xl shadow-xl p-8 text-left">
                <h2 className="text-2xl font-semibold mb-6">Edit Your Profile</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-1 font-medium text-black">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full border border-[#BABABA] text-[#00000066] px-4 py-3 rounded-md"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-black">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            className="w-full border border-[#BABABA] text-[#00000066] px-4 py-3 rounded-md"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-black">Address</label>
                    <input
                        type="text"
                        name="address"
                        className="w-full border border-[#BABABA] text-[#00000099] px-4 py-3 rounded-md"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2 mt-10">
                    <label className="block mb-1 font-medium text-black">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="w-full border border-[#BABABA] text-[#00000066] px-4 py-3 rounded-md pr-10"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {/* <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2.5 right-3 text-gray-600"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button> */}
                    </div>
                </div>
                <p className="text-sm text-[#6337E8] font-medium mb-10 cursor-pointer"
                    onClick={() => setShowChangePassword(true)}
                >
                    Change Password ?
                </p>
                <div className="flex justify-center gap-10">
                    <button
                        onClick={() => {
                            setShowEditProfile(false);
                            onClose();
                        }}
                        className="w-50 h-10 border border-[#FFB400] text-[#FFB400] rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDone}
                        className="w-50 h-10 bg-[#FFB400] text-black rounded-md font-semibold"
                    >
                        Done
                    </button>
                </div>
            </div>
            <ChangePassword
                show={showChangePassword}
                onClose={() => setShowChangePassword(false)}
                currentPassword={formData.password}
                onPasswordChange={(newPassword) =>
                    setFormData((prev) => ({ ...prev, password: newPassword }))
                }
            />
        </div>
        /* {showChangePassword && <ChangePassword onClose={() => setShowChangePassword(false)} />} */

    );
}

export default EditProfile;