import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <>
    <Link to="/">HOME</Link>
    <Link to="/flights">Flights</Link>
    <Link to="/login">Login</Link>
    </>
  )
}

export default NavBar