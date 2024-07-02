import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Packages from "../Pages/Packages/Packages";
import Details from "../Pages/Packages/Details/Details";
import Contactus from "../Pages/Contactus/Contactus";
import Signup from "../Pages/Signup/Signup";
import Login from "../Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/places/${params.id}`),
      },
      {
        path: "/contactus",
        element: <Contactus></Contactus>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
