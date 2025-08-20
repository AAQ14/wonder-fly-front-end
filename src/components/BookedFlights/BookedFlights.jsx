import React from 'react'
import { useEffect, useState } from 'react'
import {userDetails} from '../../services/userService'



const BookedFlights = ({userId}) => {
    const [user,setUser] = useState({})

    const getUser = async()=>{
        try {
            const userFound = await userDetails(userId) 
            setUser(userFound)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{getUser()},[userId])
    console.log(user)
  return (
    <>
    {user? user.bookedFlights?.map(flight => (
      <div>
        <p>flight number: {flight._id}</p>
        <p>from: {flight.from.country}</p>
        <p>to: {flight.to.country}</p>
        <p>date: {flight.date}</p>
        <button>Cancel flight</button>
      </div>
)): null}
    </>
  )
}

export default BookedFlights