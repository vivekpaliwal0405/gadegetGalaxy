import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"; // Import icons from React Icons
import image from "../../Components/img/adminimg.jpg"; // Import the image

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Predefined credentials
    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      navigate("/AdminDashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-white bg-opacity-50 p-8 rounded shadow-md w-full max-w-sm backdrop-filter backdrop-blur-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form id="loginForm" onSubmit={handleLogin}>
          <div className="flex items-center mb-4 border-b border-gray-300 py-2">
            <AiOutlineUser className="text-gray-500 mr-2" size={20} />{" "}
            {/* Use React Icon */}
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Admin Name"
              className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-6 border-b border-gray-300 py-2">
            <AiOutlineLock className="text-gray-500 mr-2" size={20} />{" "}
            {/* Use React Icon */}
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
