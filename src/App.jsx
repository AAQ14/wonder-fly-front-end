import { jwtDecode } from 'jwt-decode'

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
import Flights from './components/Flights/Flights'
import LoginForm from './components/Login/LoginForm/LoginForm'
import LogoutButton from './components/LogoutButton/LogoutButton'
import Home from './Home/Home'
import SignUp from './components/Signup/SignupForm/SignupForm'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Profile from './components/Profile/Profile'

import './App.css'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [userId, setUserId] = useState('')


  function handleLogin(newToken) {
    setToken(newToken)
    localStorage.setItem('token', newToken)
  }

  function handleLogout() {
    setToken(null)
    localStorage.removeItem('token')
  }

  useEffect(()=>{
     if (token) {
    const decodedToken = jwtDecode(token)
    setUserId(decodedToken.id)
    console.log(decodedToken.id)
    console.log(decodedToken)
  }
  }, [])
 
  return (
    <>
    <Router>
      <div>

      {token ? <LogoutButton onLogout={handleLogout} /> : null}
      <NavBar token={token}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/login' element={<LoginForm onLogin={handleLogin} />}/>
        <Route path="/signup" element={<SignUp />} />
           <Route
            path="/flights"
            element={
              <ProtectedRoute>
                <Flights />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App