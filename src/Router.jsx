import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";

import Blogs from "./NavItems/Blogs/Blogs";
import Contacts from "./NavItems/Contacts/Contacts";
import Appointments from "./NavItems/AppointMents/Appointments";
import AddToCart from "./NavItems/AddToCart/AddToCart";
import LogIn from "./NavItems/LogIn/LogIn";
import Register from "./NavItems/LogIn/Register";
import CheckOut from "./NavItems/Services/CheckOut";
import MyBookings from "./NavItems/MyBookings/MyBookings";
import PrivateRoute from "./private/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
        path:"/" ,
        element:<Home></Home>
        },
        {
            path:"/blog",
            element:<Blogs></Blogs>
        },
        {
            path:"/contact",
            element:<Contacts></Contacts>
        },
        {
            path:"/appointments",
            element:<Appointments></Appointments>
        },
        {
            path:"/addtocart",
            element:<AddToCart></AddToCart>
        },{
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/services/checkout/:id",
          element:<CheckOut></CheckOut>,
          loader:({params})=>fetch(`http://localhost:5000/services/checkout/${params.id}`)
        },
        {
          path:"/bookings",
          element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;