import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
import Flights from './components/Flights/Flights'
import Login from './components/Login/Login'
import Home from './Home/Home'

import './App.css'

const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/flights" element={<Flights />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App