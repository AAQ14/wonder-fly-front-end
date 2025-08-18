import { jwtDecode } from 'jwt-decode'

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
import Flights from './components/Flights/Flights'
import LoginForm from './components/Login/LoginForm/LoginForm'
import LogoutButton from './components/LogoutButton/LogoutButton'
import Home from './Home/Home'
import SignUp from './components/Signup/SignupForm/SignupForm'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import './App.css'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  function handleLogin(newToken) {
    setToken(newToken)
    localStorage.setItem('token', newToken)
  }

  function handleLogout() {
    setToken(null)
    localStorage.removeItem('token')
  }

  if (token) {
    const decodedToken = jwtDecode(token)
    console.log(decodedToken)
  }
  return (
    <>
    <Router>
      <div>

      {token ? <LogoutButton onLogout={handleLogout} /> : null}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/flights" element={<Flights />} />
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
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App