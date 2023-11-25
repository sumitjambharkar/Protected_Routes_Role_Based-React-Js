import React from "react";
import { Link } from "react-router-dom";

const Home = ({ login, currentUserType }) => {
  const logout = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Protected_Routes_Role_Based-React-Js</h1>
      <p>{currentUserType}</p>
      <div style={{ display: "flex", columnGap: "12px" }}>
        <Link to="/welcome">Public User</Link>
        <Link to="/user">Normal User</Link>
        <Link to="/admin">Admin User</Link>
        {!currentUserType ? (
          <Link onClick={login}>Login</Link>
        ) : (
          <Link onClick={logout}>Logout</Link>
        )}
      </div>
    </div>
  );
};

export default Home;
