import { useLoaderData } from "react-router-dom";
import image from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const CheckOut = () => {
    const {user}=useContext(AuthContext)
    const service=useLoaderData()
    const {_id,title,img,price}=service;
    const handleCheckOut=e=>{
      e.preventDefault()  ;
      const form=e.target;
      const fName=form.firstName.value;
      const lName=form.lastName.value;
      const phone=form.phone.value;
      const email=form.email.value;
      const message=form.message.value;
    //   form.reset()
      const booking={
       service_id:_id,title,img,email,phone,message,price,fName,lName
      } 
      console.log(booking);
      fetch("http://localhost:5000/bookings",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(booking)
      })
    }
    return (
        <div>
        <div className="relative overflow-hidden" >
            <img src={image} alt="" className="w-full" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute h-full w-full top-0 ">
                <h2 className="text-white text-3xl font-semibold top-2 md:top-1/3 left-4 md:left-10 w-full absolute">Check Out</h2>
              <div className=" flex justify-center">
              <p className=" absolute bottom-0 p-4  bg-orange-600 text-white ">Home/Checkout</p>
              </div>
            </div>
        </div>
           <div className="  py-16 px-2 bg-[url('https://i.ibb.co/thVTYGY/Simple-Shiny-1.png')]">
           <form onSubmit={handleCheckOut} className="lg:w-3/4 lg:mx-auto gap-3 grid md:grid-cols-2">
         <input type="text" name="firstName" placeholder="First Name"  className="input input-bordered input-error w-full" />
         <input type="text" name="lastName" placeholder="Last Name"   className="input input-bordered input-error w-full" />
         <input type="text" name="phone" placeholder="Phone"  className="input input-bordered input-error w-full" />
         <input type="text" name="email" defaultValue={user.email} placeholder="Email"  className="input input-bordered input-error w-full" />
          <textarea  name="message" id=""  rows="6" placeholder="Message" className=" input-bordered input-error w-full rounded-lg col-span-2 "></textarea>
         <input type="submit" value="Order Confirm" className="btn btn-outline text-white w-full col-span-2"/>
      </form> 
           </div>
        </div>
    );
};

export default CheckOut;