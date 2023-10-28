import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Navbar = () => {

  const {user,logOut}=useContext(AuthContext)
  const handleSignOut=()=>{
    logOut()
    .then(console.log("log out successful"))
    .catch(error=>console.log(error.message))
  }
    const links =<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
       {
        user?<>
        <li> <li><NavLink to="/bookings">My Bookings</NavLink></li></li>
        <li><button onClick={handleSignOut}>Sign Out</button></li>
        </> :<li><NavLink to="/login">LogIn</NavLink></li>
       }
    </>
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="bg-white dropdown-content mt-3 z-[1] p-4 shadow  rounded-box w-52 text-xl">
       {
        links
       }
      </ul>
    </div>
    <Link to="/"><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" flex gap-8 text-2xl font-semibold px-1">
     {
        links
     }
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex items-center gap-4">
  <NavLink to="/addtocart"><AiOutlineShoppingCart className="text-4xl"></AiOutlineShoppingCart></NavLink>
   <Link to="/appointments"><button className="btn btn-outline text-orange-600 text-lg font-semibold">Appointments</button></Link>
  </div>
  </div>
</div> 
        </div>
    );
};

export default Navbar;