import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import BookingRow from "./BookingRow";


const MyBookings = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);
    const url=`http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[url])
    return (
        <div className=" overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                Cancel
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            bookings.map(booking=><BookingRow key={booking._id} booking={booking} bookings={bookings} setBookings={setBookings}></BookingRow>)
          } 
          </tbody>
        </table>
      </div>
    );
};

export default MyBookings;