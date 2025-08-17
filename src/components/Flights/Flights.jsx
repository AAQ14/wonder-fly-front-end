import React from 'react'
import { useState } from 'react'
import FlightForm from './FlightForm/FlightForm'

const Flights = () => {
  const [flights, setFlights] = useState([])

  return (
    <>
    <h3>Flights</h3>
    <p>create</p>
    <FlightForm setFlights={setFlights}/>
    </>
  )
}

export default Flights