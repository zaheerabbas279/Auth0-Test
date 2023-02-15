import React, { forwardRef, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { setLocal, getLocal, clearLocal } from "../utils/LocalStorage";
import toast, { Toaster } from "react-hot-toast";
import { otpStart, otpLogin } from "../service";
import PassswordLessComponent from "../PasswordLess";
import { authClient } from "../config";

const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, loginWithPopup } =
    useAuth0();

  const loginOTP = () => {
    authClient.loginWithPopup();
  };

  return (
    <>
      <h3>Login Here!</h3>

      {isAuthenticated ? (
        <>
          <button className="btn btn-danger" onClick={() => logout()}>
            Logout
          </button>

          {user.email_verified ? (
            <>
              {" "}
              <article className="column">{JSON.stringify(user)}</article>
            </>
          ) : (
            <>
              <h3 className="text-danger">Please verify your email!</h3>
              <p>An verification link has been sent to email, please verify</p>
            </>
          )}
        </>
      ) : (
        <>
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
          <PassswordLessComponent />
          {/* <button onClick={() => authClient.loginWithPopup()}>
            Login with OTP
          </button> */}
          {/* <button onClick={() => loginWithPopup()}>Login with OTP!!!!</button> */}
        </>
      )}
    </>
  );
};

export default Login;
