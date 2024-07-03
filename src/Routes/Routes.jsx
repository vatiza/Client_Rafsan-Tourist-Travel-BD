import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import BookConfirm from "../Pages/BookConfirm/BookConfirm";
import Contactus from "../Pages/Contactus/Contactus";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Packages/Details/Details";
import Packages from "../Pages/Packages/Packages";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

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

      {
        path: "/bookconfirm/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <BookConfirm></BookConfirm>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/places/${params.id}`),
      },
    ],
  },
]);

export default router;
