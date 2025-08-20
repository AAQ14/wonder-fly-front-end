import React from 'react'
import { useState, useEffect } from 'react'
import FlightForm from './FlightForm/FlightForm'
import { index, deleteFlight  } from '../../services/flightService'
import {bookFlight} from '../../services/userService'

const Flights = ({userType, userId}) => {
  const [flights, setFlights] = useState([])
  const [formIsShown, setFormIsShown] = useState(false)
  const [selected, setSelected] = useState(null)
  

  //Filtering set👇
  const [fromFilter,setFromFilter]=useState('')
  const [toFilter,setToFilter]=useState('')

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

    // console.log("this is 11: ",selected)


  const handleFormView = (flight)=>{
    if(!flight._id)setSelected(null)
    setFormIsShown(!formIsShown)
  }

  const handleBookTicket = async (flight)=>{
    try {
      await bookFlight(userId,flight)
      alert("flight booked sucessfully")
    } catch (err) {
      console.log(err)
    }
  }

  //Filtering 👇
const filteredFlights = Array.isArray(flights) ? flights.filter(flight => 
  (fromFilter ? flight.from.country === fromFilter : true) &&
  (toFilter ? flight.to.country === toFilter : true)
) : []
  const flightsToDisplay =(fromFilter||toFilter)?filteredFlights:flights
const countriesOption = Array.isArray(flights) 
  ? [...new Set(flights.flatMap(flight => [flight.from.country, flight.to.country]))] 
  : []
  
  return (
    <>
    
    {formIsShown ? 
    <FlightForm getAllFlights={getAllFlights} handleFormView={handleFormView} selected={selected} setFormIsShown={setFormIsShown} setSelected={setSelected}/> :
    <>
    <br />
    
    {/* I am not getting the user type until i refresh */}
    
    {userType==="admin" ? <button onClick={handleFormView}>Add Flight</button> :  null}
    <h3>Flights</h3>

    <label htmlFor="From">From</label>
    <select value={fromFilter} onChange={(event)=>setFromFilter(event.target.value)}>
      <option value="">All</option>
      {countriesOption.map((country,index)=>(
        <option key={index} value={country}>{country}</option>
      ))}
    </select>

    <label htmlFor="To">To</label>
     <select value={toFilter} onChange={(event)=>setToFilter(event.target.value)}>
      <option value="">All</option>
      {countriesOption.map((country,index)=>(
        <option key={index} value={country}>{country}</option>
      ))}
    </select>
    <button onClick={() => { setFromFilter(''); setToFilter('') }}>Reset</button>

    {filteredFlights.length? filteredFlights.map((flight, index) => (
      <div key={index} style={{cursor: 'pointer', color: '#7a57c5ff'}} onClick={() =>{console.log(flight); handleSelect(flight)}}>
      <p>from: {flight.from.country}</p>
      <p>to: {flight.to.country}</p>
      <p>date: {flight.date}</p>{console.log(flight.date)}
      <p>price: {flight.price}</p>
      <button onClick={()=>handleBookTicket(flight)}>Book Ticket</button>
          {userType==="admin" ? <> <button onClick={()=>{handleFormView(flight._id);handleSelect(flight);}}>edit flight</button>
      <button onClick={async()=>{await deleteFlight(flight._id);getAllFlights()}}>delete flight</button></>:  null}

     
      </div>
    )) : <p>No available flights from {fromFilter} to {toFilter}</p>}
    
    </>}
    
    </>
  )
}

export default Flights