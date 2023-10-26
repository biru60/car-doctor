import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";

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