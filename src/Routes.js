import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Coupon from "./coupon";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
const AuthRoutes = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/coupon" element={<Coupon />} />
        {isAuthenticated && <Route path="/profile" element={<Profile />} />}
      </Routes>
    </>
  );
};

export default AuthRoutes;
