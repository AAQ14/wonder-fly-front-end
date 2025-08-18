import React from 'react'
import { useState, useEffect } from 'react'
import FlightForm from './FlightForm/FlightForm'
import { index, deleteFlight } from '../../services/flightService'

const Flights = () => {
  const [flights, setFlights] = useState([])
  const [formIsShown, setFormIsShown] = useState(false)
  const [selected, setSelected] = useState(null)

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

  const handleSelect = (flight) => {
    setSelected(flight)
  }

  const handleFormView = (flight)=>{
    if(!flight._id)setSelected(null)
    setFormIsShown(!formIsShown)
  }
  
  return (
    <>
    
    {formIsShown ? 
    <FlightForm getAllFlights={getAllFlights} handleFormView={handleFormView} selected={selected} setFormIsShown={setFormIsShown} setSelected={setSelected}/> :
    <>
    <br />
    <button onClick={()=>setFormIsShown(true)}>Add Flight</button>
    <h3>Flights</h3>
    {flights.length? flights.map((flight, index) => (
      <div key={index} style={{cursor: 'pointer', color: '#7a57c5ff'}} onClick={() =>{console.log(flight); handleSelect(flight)}}>
      <p>from: {flight.from}</p>
      <p>to: {flight.to}</p>
      <p>date: {flight.date}</p>
      <p>price: {flight.price}</p>
      <button onClick={()=>{handleFormView(flight._id);setSelected(selected)}}>edit flight</button>
      <button onClick={async()=>{await deleteFlight(flight._id);getAllFlights()}}>delete flight</button>
      </div>
    )) : <p>no flights</p>}
    
    </>}
    
    </>
  )
}

export default Flights