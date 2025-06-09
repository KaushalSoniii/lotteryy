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
      navigate("/example");
    }, 100); // 100ms delay
    } else {
      alert("Please fill all fields");
    }
  };

};

export default Login;