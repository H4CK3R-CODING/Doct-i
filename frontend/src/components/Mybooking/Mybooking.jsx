import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Atoms, { userRecoil } from "../../Recoils/Atoms";
import toast from "react-hot-toast";
import List from "./List";

const Mybooking = () => {
  const [loading, setLoading] = useState(true);
  const userId = useRecoilValue(Atoms.userId);
  const [booking, setBooking] = useRecoilState(Atoms.booking);
  const getBookings = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (userId == "") {
        console.log("user not logged in");
        return;
      }

      const { data } = await axios.post(
        `${
          import.meta.env.VITE_BACKENDURL
        }/api/v1/booking/getbookingsByPatient`,
        { userId: userId },
        { withCredentials: true },
        config
      );

      if (data) {
        setBooking(data);
        console.dir(data)
      } else {
        console.log("Not Booking");
      }
    } catch (error) {
      toast.error("Error on Backend Side");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookings();
  }, [userId]);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {booking.map((ele, idx) => {
            return (
              <div key={idx} className="flex justify-between">
                <List bookingDetails={ele}/>
                {/* <p>
                  {ele?.doctor_id?.name} at {ele?.slot}
                </p>

                <button className="bg-red-500">Cancel</button> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Mybooking;
