import PropTypes from "prop-types"

const BookingRow = ({booking,bookings,setBookings}) => {
    const {_id,img,title,email,status}=booking
    const handleDelete=(id)=>{
        const process=confirm("are u sure?");
        if(process){
            fetch(`http://localhost:5000/delete/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data.deletedCount);
                if(data.deletedCount>0){
                    const remaining=bookings.filter(booking=>booking._id!=id);
                    setBookings(remaining)
                }
            })
        }
    }
    const handleUpdate=(id)=>{
   fetch(`http://localhost:5000/update/${_id}`,{
    method:"PATCH",
    "content-type":"application/json",
    body:JSON.stringify({status:"confirm"})
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
    if(data.matchedCount>0){
        const remaining=bookings.filter(booking=>booking._id!=id);
        const updated=bookings.find(booking=>booking._id===id);
        updated.status="confirm";
        const newBook=[updated,...remaining]
        setBookings(newBook)
    }
   })
    }
    return (
        <tr>
              <th>
              <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline text-orange-600">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
              </th>
              <td>
                    <div className="avatar">
                    <div className="rounded  w-12 h-12">
                      <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
              </td>
              <td>
                {title}
              </td>
              <td>{email}</td>
              <th>
                {
                    status?<span className="text-orange-600">Confirmed</span>:<button onClick={()=>handleUpdate(_id)} className="btn btn-outline text-rose-600">Confirm</button>
                }
              </th>
            </tr> 
    );
};
BookingRow.propTypes={
    booking: PropTypes.object,
    bookings: PropTypes.array,
    setBookings:  PropTypes.function
}
export default BookingRow;