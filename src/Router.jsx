import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";
import About from "./NavItems/About/About";
import Services from "./NavItems/Services/Services";
import Blogs from "./NavItems/Blogs/Blogs";
import Contacts from "./NavItems/Contacts/Contacts";
import Appointments from "./NavItems/AppointMents/Appointments";
import AddToCart from "./NavItems/AddToCart/AddToCart";

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
            path:"/about",
            element:<About></About>
        },
        {
            path:"/services",
            element:<Services></Services>
        }
        ,
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
        }
      ]
    },
  ]);
  export default router;