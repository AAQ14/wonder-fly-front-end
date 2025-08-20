import { jwtDecode } from "jwt-decode";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Flights from "./components/Flights/Flights";
import LoginForm from "./components/Login/LoginForm/LoginForm";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import Home from "./Home/Home";
import SignUp from "./components/Signup/SignupForm/SignupForm";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Profile from "./components/Profile/Profile";
import BookedFlights from "./components/BookedFlights/BookedFlights";

import "./App.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState("");

  function handleLogin(newToken) {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    if (newToken) {
      const decodedToken = jwtDecode(newToken);
      setUserId(decodedToken.id);
      setUserType(decodedToken.userType);
    }
  }

  function handleLogout() {
    setToken(null);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
      setUserType(decodedToken.userType);
      // console.log(decodedToken.id);
      // console.log(decodedToken.userType);
    }
  }, []);

  return (
    <>
      <Router>
        <div>
          {token ? <LogoutButton onLogout={handleLogout} /> : null}
          <NavBar token={token} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<LoginForm onLogin={handleLogin} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/flights"
              element={
                <ProtectedRoute>
                  <Flights userId={userId} userType={userType} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile userId={userId} onLogout={handleLogout} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bookedFlights"
              element={
                <ProtectedRoute>
                  <BookedFlights userId={userId}/>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
