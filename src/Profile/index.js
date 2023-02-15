import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { logout, user } = useAuth0();
  console.log("🚀 ~ file: index.js:6 ~ Profile ~ user", user);
  return (
    <>
      <h3>User Profile</h3>
      <article className="column">{user}</article>
      <button className="btn btn-danger" onClick={() => logout()}>
        Logout
      </button>
    </>
  );
};

export default Profile;
