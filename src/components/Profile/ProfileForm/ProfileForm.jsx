import React from "react";
import { updateUser } from "../../../services/userService";
import { useState } from "react";

const ProfileForm = ({ handleFormView, user, userId }) => {
  const initialState = { firstName: "", lastName: "", email: "" };
  const [formData, setFormData] = useState(user ? user : initialState);

  console.log(formData);

  const handleChange = (evt) => {
    
    setFormData([{...formData, [evt.target.name]: evt.target.value}])
    console.log(formData)
  };

  const handleSubmit = async(evt) =>{
    evt.preventDefault()
    try {
      const updatedUserInfo = await updateUser(userId,formData[0] )

    if(updatedUserInfo.err){
      throw new Error(updatedUserInfo.err)
    }
    if(updatedUserInfo.status === 200){
      handleFormView()
    }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <h3>Update</h3>
      <form onSubmit={handleSubmit}>
        {formData.map((info) => (
        <>
          <label htmlFor="firstName">First name:</label>
          <input
            name="firstName"
            id="firstName"
            value={info.firstName}
            onChange={handleChange}
          ></input>
          <label htmlFor="lastName">Last name:</label>
          <input
            name="lastName"
            id="lastName"
            value={info.lastName}
            onChange={handleChange}
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            value={info.email}
            onChange={handleChange}
          ></input>
          <button type="submit">Update</button>
        </>
      ))}
      </form>

      <button onClick={handleFormView}>Back</button>
    </>
  );
};

export default ProfileForm;
