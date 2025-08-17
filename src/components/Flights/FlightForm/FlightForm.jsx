import React, { useEffect } from "react";
import { useState } from "react";
import { create,  flightDetails, updateFlight} from "../../../services/flightService";

const FlightForm = ({getAllFlights, setFormIsShown, flightCreated, flightId}) => {
const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    Date: "",
    price: "",
  });

  const getFlightDetails = async()=>{
    try {
      const flight = await flightDetails(flightId)
      setFormData(flight)
    } catch (err) {
      console.log(err)
    }
  } 

  if(flightCreated){
    useEffect(()=>{
      getFlightDetails()
    }, [])
  }

  const handleChange = (evt)=>{
    setFormData({...formData, [evt.target.name]: evt.target.value})
    console.log(formData)
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    if(isSubmitting)return
    setIsSubmitting(true)
    let res
    
    if(flightCreated){
      res = await updateFlight(flightId, formData)
    }else {
      res = await create(formData)
    }
    if(res.status=== 500){
      console.log("invalid data")
    }
    getAllFlights()
    setFormData({
    from: "",
    to: "",
    Date: "",
    price: "",
  })
  if(res.status == 201){
      setFormIsShown(false)
    }
    setIsSubmitting(false)
  }

  return (
    <>
      <h3>Creating a flight</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From: </label>
        <select name="from" value={formData.from} onChange={handleChange}>
          <option value="68a1479317f3896ce2244efd" >Bahrain</option>
          <option value="68a17e3a0b393e504857bf44" >China</option>
          <option value="68a1930c64bc454b60482035" >Jordan</option>
          <option value="68a180050b393e504857bf46" >Italy</option>
          <option value="68a1932164bc454b60482037" >Mexico</option>
          <option value="68a1932664bc454b60482039"  >Peru</option>
          <option value="68a1933164bc454b6048203b"  >Rio de Janeiro</option>
        </select>

        <label htmlFor="to">to: </label>
        <select name="to" value={formData.to} onChange={handleChange}>
          <option value="68a1479317f3896ce2244efd" >Bahrain</option>
          <option value="68a17e3a0b393e504857bf44" >China</option>
          <option value="68a1930c64bc454b60482035" >Jordan</option>
          <option value="68a180050b393e504857bf46" >Italy</option>
          <option value="68a1932164bc454b60482037" >Mexico</option>
          <option value="68a1932664bc454b60482039"  >Peru</option>
          <option value="68a1933164bc454b6048203b"  >Rio de Janeiro</option>
        </select>

        <label htmlFor="Date">Date: </label>
        <input
          type="date"
          name="Date"
          id="Date"
          value={formData.Date}
          onChange={handleChange}
        ></input>

        <label htmlFor="price">price: </label>
        <input
          name="price"
          id="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        ></input>

        <button type="submit">Submit</button>
      </form>
      <button onClick={()=>setFormIsShown(false)}>Back</button>
    </>
  );
};

export default FlightForm;
