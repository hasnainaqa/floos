import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";
const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-[#54F439] text-black px-6 py-3 rounded-full hover:bg-[#52ff34] text-base sm:text-base mt-7 normalheight"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
