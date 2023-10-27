import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { FaGoogle,FaFacebookSquare,FaTwitterSquare } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
const LogIn = () => {
    const {googleSignIn,logIn,twitterSignIn}=useContext(AuthContext)
    const handleLogIn=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        form.reset();
        logIn(email,password)
        .then(result=>console.log(result.user))
        .catch(error=>console.log(error.message))

    }
    const handlegoogle=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>console.log(error.message))
    }
    const handleTwitter=()=>{
        twitterSignIn()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>console.log(error.message))
    }
   
    return (
        <div >
            <div className=" py-16 w-full bg-[url('https://i.ibb.co/thVTYGY/Simple-Shiny-1.png')]">
  <div className="hero-content flex-col gap-10 lg:flex-row">
    <img src={img} className="h-full rounded-lg shadow-2xl" />
    <div className="w-1/2 space-y-2">
    <h2 className="text-center text-3xl font-semibold text-white">Log In Now</h2>
      <form onSubmit={handleLogIn} className="space-y-4">
        <p className="text-white text-xl">Email</p>
         <input type="email" name="email"  className="input input-bordered input-error w-full" />
         <p className="text-white text-xl">Password</p>
         <input type="password" name="password"  className="input input-bordered input-error w-full" />
         <input type="submit" value="Login" className="btn btn-outline text-white w-full"/>
      </form>
       <p className="text-white">AlsoLogin with,</p>
       <div className="flex justify-center gap-4 text-3xl text-white">
         <button onClick={handlegoogle}><FaGoogle></FaGoogle></button>
         <button ><FaFacebookSquare></FaFacebookSquare></button>
         <button  onClick={handleTwitter}><FaTwitterSquare></FaTwitterSquare></button>
       </div>
       <div className="flex justify-between items-center">
        <p className="text-white"> Do not have a account?</p>
       <Link to="/register"> <button className="btn btn-outline text-white">REGISTER</button></Link>
       </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;