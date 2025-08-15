import React from "react";
import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  if (!isUserLoggedIn()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
