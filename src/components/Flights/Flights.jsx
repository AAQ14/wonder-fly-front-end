import React from 'react'
import { useState, useEffect } from 'react'
import FlightForm from './FlightForm/FlightForm'
import { index, deleteFlight } from '../../services/flightService'

const Flights = () => {
  const [flights, setFlights] = useState([])
  const [formIsShown, setFormIsShown] = useState(false)

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
    
    {formIsShown ? 
    <FlightForm setFlights={setFlights} setFormIsShown={setFormIsShown}/> :
    <>
    <br />
    <button onClick={()=>setFormIsShown(true)}>Add Flight</button>
    <h3>Flights</h3>
    {flights.length? flights.map((flight, index) => (
      <div key={index}>
      <p>from: {flight.from}</p>
      <p>to: {flight.to}</p>
      <p>date: {flight.date}</p>
      <p>price: {flight.price}</p>
      <button onClick={async()=>{await deleteFlight(flight._id);getAllFlights()}}>delete flight</button>
      </div>
    )) : <p>no flights</p>}
    
    </>}
    
    </>
  )
}

export default Flights