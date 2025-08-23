import React from "react";
import { useEffect, useState } from "react";
import { userDetails, cancelFlight } from "../../services/userService";
import { FadeLoader } from "react-spinners";

const BookedFlights = ({ userId }) => {
  const [user, setUser] = useState({});

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
      { user?.bookedFlights?.length === 0 ? (
        <p>no flights booked</p>
      ) : Object.keys(user).length  ? (
        user.bookedFlights?.map((flight) => (
          <div className="trip">
            <p>flight number: {flight._id}</p>
            <p>from: {flight.from.country}</p>
            <p>to: {flight.to.country}</p>
            <p>date: {flight.date}</p>
            <div
              className="BookAndCancelBtns"
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
