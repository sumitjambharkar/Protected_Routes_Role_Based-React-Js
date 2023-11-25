import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./components/userRoutes/Profile";
import User from "./components/userRoutes/User";
import Home from "./components/Home";
import Admin from "./components/adminRoutes/User";

const USER_TYPES = {
  PUBLIC: "Public User",
  NORMAL_USER: "Normal User",
  ADMIN_USER: "Admin User",
};
const CURRENT_USER_TYPE = USER_TYPES.NORMAL_USER;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicElements><Home /></PublicElements>}/>
        <Route path="/user" element={<UserElements><User /></UserElements>}/>
        <Route path="/profile"element={<UserElements><Profile /></UserElements>}/>
        <Route path="/admin" element={<AdminElements><Admin /></AdminElements>}/>
        <Route path="*" element={<div>Page Not Found!</div>} />
      </Routes>
    </Router>
  );
};


function PublicElements({ children }) {
  return <>{children}</>;
}

function UserElements({ children }) {
  if (
    CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||
    CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER
  ) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

function AdminElements({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

export default App;
