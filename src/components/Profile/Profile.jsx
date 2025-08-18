import React from "react";
import { useState, useEffect } from "react";
import { userDetails } from "../../services/userService";

const Profile = ({ userId }) => {
  const [user, setUser] = useState();

  const getUserDetails = async () => {
    const details = await userDetails(userId);
    setUser(details);
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  console.log("this is user", user.firstName);

  return (
    <>
      <h1>My profile</h1>
      {user.map((one) => (
        <>
          <p>First name: {one.firstName}</p>
          <p>Last name: {one.lastName}</p>
          <p>Email: {one.email}</p>
        </>
      ))}
      {/* <h4>Email: {user.email}</h4> */}
    </>
  );
};

export default Profile;
