import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
import Flights from './components/Flights/Flights'
import Login from './components/Login/Login'



const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}/>
        <Route path="/flights" element={<Flights />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App