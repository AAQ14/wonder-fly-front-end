import React from 'react'
import { useState, useEffect } from 'react'
import FlightForm from './FlightForm/FlightForm'
import { index, deleteFlight } from '../../services/flightService'

const Flights = () => {
  const [flights, setFlights] = useState([])

  const getAllFlights = async () =>{
    try {
      const allFlights = await index()
      setFlights(allFlights)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getAllFlights()
  },[])
  
  return (
    <>
    <h3>Flights</h3>
    {flights.map(flight => (
      <>
      <p>from: {flight.from}</p>
      <p>to: {flight.to}</p>
      <p>date: {flight.date}</p>
      <p>price: {flight.price}</p>
      <button onClick={()=>deleteFlight(flight._id)}>delete flight</button>
      </>
    ))}
    <p>create</p>
    <FlightForm setFlights={setFlights}/>
    </>
  )
}

export default Flights