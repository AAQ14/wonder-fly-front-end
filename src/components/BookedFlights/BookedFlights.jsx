import React from "react";
import { useEffect, useState } from "react";
import { userDetails, cancelFlight } from "../../services/userService";
import { FadeLoader } from "react-spinners";
import  dayjs from "dayjs";

const BookedFlights = ({ userId }) => {
  const [user, setUser] = useState({});

  console.log(user.firstName)
  const getUser = async () => {
    try {
      const userFound = await userDetails(userId);
      setUser(userFound);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, [userId]);
  console.log(user);

  const handleCancel = async (flight) => {
    try {
      const updated = user.bookedFlights.filter(
        (flightt) => flight !== flightt
      );
      setUser({ ...user, bookedFlights: updated });
      alert("flight cancelled successfully");
      await cancelFlight(userId, flight);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <div className="bookedflightsh1">
    <h1>{user?.firstName}'s Booked Flights</h1>
    </div>
      { user?.bookedFlights?.length === 0 ? (
        <p>no flights booked</p>
      ) : Object.keys(user).length  ? (
          
        user.bookedFlights?.map((flight) => (
          <div className="trip">
            <div className="trip3">
            <p>Flight number: {flight._id}</p>
            <p>From: {flight.from.country}</p>
            <p>To: {flight.to.country}</p>
            <p>Date: {flight.date}</p>
            {/* <p>{dayjs(flight.date).format("MM/DD/YYYY")}</p> */}
            <p>Price: {flight.price}</p>
          </div>
            <div
              className="BookAndCancelBtns2"
              onClick={() => handleCancel(flight)}
            >
              Cancel flight
            </div>
          </div>
        ))
      ) : <FadeLoader />}
    </>
  );
};

export default BookedFlights;
