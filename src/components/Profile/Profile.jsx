import React from "react";
import { useState, useEffect } from "react";
import { userDetails } from "../../services/userService";
import ProfileForm from "./ProfileForm/ProfileForm";
import { FadeLoader } from "react-spinners";

const Profile = ({ userId }) => {
  const [user, setUser] = useState({});
  const [formIsShown, setFormIsShown] = useState(null);

  const getUserDetails = async () => {
    try {
      const details = await userDetails(userId);
      setUser(details);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleFormView = () => {
    setFormIsShown(!formIsShown);
  };

  console.log("this is user", user);

  return (
    <>
      <h1>My profile</h1>
      {formIsShown ? (
        <ProfileForm  handleFormView={handleFormView}  user={user} userId={userId}/>
      ) : Object.keys(user).length ? (
          <div >
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <button onClick={handleFormView}>Update info</button>
          </div>
      ) : (
        <FadeLoader color="#87CEEB" />
      )}
    </>
  );
};

export default Profile;
