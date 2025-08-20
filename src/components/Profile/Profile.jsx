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
      <div className="containerP">
        {formIsShown ? (
          <ProfileForm handleFormView={handleFormView} user={user} getUserDetails={getUserDetails} userId={userId} />
        ) : Object.keys(user).length ? (
          <div className="profile" >
            <div class="header"></div>
            <div className="content" >
            <div className="pfp">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
              />
            </div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p className="email">{user.email}</p>

            <div className="options">
              <div className="Dbtn">
                <DeleteAccountButton
                  userId={userId}
                  getUserDetails={getUserDetails}
                  onLogout={onLogout}
                />
              </div>
            <div className="Updbtn">
              <button onClick={handleFormView}>Update Account</button>
            </div>
            </div>
          </div>
          </div>


        ) : (
          <FadeLoader color="#ad1211" />
        )}
      </div>

    </>
  );
};

export default Profile; 