import React from "react";
import { useState } from "react";
import { create } from "../../../services/flightService";

const FlightForm = ({setFlights}) => {
const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    Date: "",
    price: "",
  });

  const handleChange = (evt)=>{
    setFormData({...formData, [evt.target.name]: evt.target.value})
    console.log(formData)
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    // if(isSubmitting)return
    // setIsSubmitting(true)
    const res = await create(formData)
    if(res.status == 200){
      console.log("200")
    }
    if(res.status=== 500){
      console.log("invalid data")
    }
    setFlights(formData)
    setFormData({
    from: "",
    to: "",
    Date: "",
    price: "",
  })
  }

  return (
    <>
      <h3>Creating a flights</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From: </label>
        <input
          name="from"
          id="from"
          value={formData.from}
          onChange={handleChange}
        ></input>

        <label htmlFor="to">to: </label>
        <select value={formData.to}>
          <option>Bahrain</option>
          <option>Bahrain</option>
          <option>Bahrain</option>
          <option>Bahrain</option>
          <option>Bahrain</option>
          <option>Bahrain</option>
        </select>
        <input
          name="to"
          id="to"
          value={formData.to}
          onChange={handleChange}
        ></input>

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
          value={formData.price}
          onChange={handleChange}
        ></input>

        <button type="submit">Add flight</button>
      </form>
    </>
  );
};

export default FlightForm;
