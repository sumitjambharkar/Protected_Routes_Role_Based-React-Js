import React, { useState } from "react";
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
import Welcome from "./components/Welcome";


const USER_TYPES = {
  PUBLIC: "Public",
  NORMAL_USER: "NORMAL",
  ADMIN_USER: "ADMIN",
};

const App = () => {

  const [currentUserType, setCurrentUserType] = useState(null);

  const login = () => {
    const userType = prompt("Enter Normal Or Admin").toUpperCase()
    setCurrentUserType(userType);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicElements><Home currentUserType={currentUserType} login={login} /></PublicElements>}/>
        <Route path="/welcome" element={<PublicElements><Welcome /></PublicElements>}/>
        <Route path="/user" element={<UserElements currentUserType={currentUserType}><User /></UserElements>}/>
        <Route path="/profile" element={<UserElements currentUserType={currentUserType}><Profile /></UserElements>}/>
        <Route path="/admin" element={<AdminElements currentUserType={currentUserType}><Admin /></AdminElements>}/>
        <Route path="*" element={<div>Page Not Found!</div>} />
      </Routes>
    </Router>
  );
};

function PublicElements({ children }) {
  return <>{children}</>;
}

function UserElements({ children,currentUserType }) {
  console.log(currentUserType);
  if (
    currentUserType === USER_TYPES.NORMAL_USER ||
    currentUserType === USER_TYPES.ADMIN_USER
  ) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

function AdminElements({ children,currentUserType}) {
  if (currentUserType === USER_TYPES.ADMIN_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

export default App;
