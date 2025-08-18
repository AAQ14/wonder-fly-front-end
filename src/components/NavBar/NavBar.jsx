import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/flights">Flights</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
    </>
  )
}

export default NavBar