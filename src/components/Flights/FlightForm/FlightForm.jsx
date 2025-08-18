import React from "react";
import { useState } from "react";
import { create, updateFlight } from "../../../services/flightService";

const FlightForm = ({
  getAllFlights,
  selected,
  setFormIsShown,
  setSelected
}) => {
  console.log("this is selected", selected)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialState = {
    from: "",
    to: "",
    date: "",
    price: "",
  };
  const [formData, setFormData] = useState(selected ? selected : initialState);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    console.log(formData);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    selected ? handleUpdateFlight(formData) : handleAddFlight();
  }

  async function handleAddFlight(evt) {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const res = await create(formData);

    if (res.status === 500) {
      console.log("invalid data");
    }
    getAllFlights();
    setFormData({
      from: "",
      to: "",
      Date: "",
      price: "",
    });
    if (res.status == 201) {
      setFormIsShown(false);
    }
    setIsSubmitting(false);
  }

  async function handleUpdateFlight(formData) {
    try {
      const updatedFlight = await updateFlight(selected._id, formData);

      if (updatedFlight.err) {
        throw new Error(updatedFlight.err);
      }
      if (updatedFlight.status == 200) {
      setFormIsShown(false);
      getAllFlights();
      setSelected(null)
    }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <h3> {selected ? "Update the flight" : "Add the flight"}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From: </label>
        <select name="from" value={formData.from} onChange={handleChange}>
          <option value="68a1479317f3896ce2244efd">Bahrain</option>
          <option value="68a17e3a0b393e504857bf44">China</option>
          <option value="68a1930c64bc454b60482035">Jordan</option>
          <option value="68a180050b393e504857bf46">Italy</option>
          <option value="68a1932164bc454b60482037">Mexico</option>
          <option value="68a1932664bc454b60482039">Peru</option>
          <option value="68a1933164bc454b6048203b">Rio de Janeiro</option>
        </select>

        <label htmlFor="to">to: </label>
        <select name="to" value={formData.to} onChange={handleChange}>
          <option value="68a1479317f3896ce2244efd">Bahrain</option>
          <option value="68a17e3a0b393e504857bf44">China</option>
          <option value="68a1930c64bc454b60482035">Jordan</option>
          <option value="68a180050b393e504857bf46">Italy</option>
          <option value="68a1932164bc454b60482037">Mexico</option>
          <option value="68a1932664bc454b60482039">Peru</option>
          <option value="68a1933164bc454b6048203b">Rio de Janeiro</option>
        </select>

        <label htmlFor="date">Date: </label>
        <input
          type="date"
          name="date"
          id="date"
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

        <button type="submit">
          {selected ? "Update flight" : "Add flight"}
        </button>
      </form>
      <button onClick={()=>setFormIsShown(false)}>BACK</button>
    </>
  );
};

export default FlightForm;
