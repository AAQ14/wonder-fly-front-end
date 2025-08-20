import React from "react";
import { useState, useEffect } from "react";
import { userDetails } from "../../services/userService";
import ProfileForm from "./ProfileForm/ProfileForm";
import { FadeLoader } from "react-spinners";
import DeleteAccountButton from "./ProfileDeleteButton";

const Profile = ({ userId, onLogout }) => {
  const [user, setUser] = useState({});
  const [formIsShown, setFormIsShown] = useState(null);

  const getUserDetails = async () => {
    try {
      console.log("USER ID: ", userId)
      const details = await userDetails(userId);
    console.log("this is user", details);

      setUser(details);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("In useEffect()")
    getUserDetails();
  }, [userId]);

  const handleFormView = () => {
    setFormIsShown(!formIsShown);
  };

  
  return (
    <>
      <h1>My profile</h1>
      {formIsShown ? (
        <ProfileForm  handleFormView={handleFormView}  user={user} getUserDetails={getUserDetails} userId={userId}/>
      ) : Object.keys(user).length ? (
          <div >
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <div className="Dbtn">
          <DeleteAccountButton
          userId={userId}
          getUserDetails={getUserDetails}
          onLogout={onLogout}
          />
          </div>

            <button onClick={handleFormView}>Update info</button>
          </div>
      ) : (
        <FadeLoader color="#87CEEB" />
      )}
    </>
  );
};

export default Profile;
