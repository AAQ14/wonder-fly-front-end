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
    <div className='filter'>
      <div className='fromandto'>

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
    </div>
    <button onClick={() => { setFromFilter(''); setToFilter('') }}>Reset</button>
    </div>
    {userType === "admin" ? <div className='addFlight'><button onClick={handleFormView}>Add flight</button></div> : null}
    {filteredFlights.length? filteredFlights.map((flight, index) => (
      <div key={index} onClick={() =>{console.log(flight); handleSelect(flight)}}>
        <div className='trip'>
          <div className='trip2'>
      <p>From: {flight.from.country}</p>
      <p>To: {flight.to.country}</p>
      <p>Date: {flight.date}</p>{console.log(flight.date)}
      <p>Price: {flight.price}</p>
      </div>
      <div className='flightButtons'>
       {userType === "admin" ? <div className='deleteFlight'>
      <button onClick={async()=>{await deleteFlight(flight._id);getAllFlights()}}>delete flight</button>
      </div> : null}

      {userType === "admin" ?  <div className='updateFlight'>
      <button onClick={()=>{handleFormView(flight._id);handleSelect(flight);}}>edit flight</button>
      </div> : null}
      </div>
      </div>
      </div>
      
    )) : <p className='message'>No available flights from {fromFilter} to {toFilter}</p>}
    
    </>}
    
    </>
  )
}

export default Flights