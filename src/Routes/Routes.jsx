import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Contactus from "../Pages/Contactus/Contactus";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Packages/Details/Details";
import Packages from "../Pages/Packages/Packages";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import BookNow from "../Pages/BookNow/BookNow";
import AddPlaces from "../Pages/Dashboard/AddPlaces/AddPlaces";
import ManagePlaces from "../Pages/Dashboard/ManagePlaces/ManagePlaces";
import AddEvents from "../Pages/Dashboard/AddEvents/AddEvents";

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
        path: "/booknow/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <BookNow></BookNow>
          </PrivateRoutes>
        ),
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        {" "}
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "mybooking",
        element: (
          <PrivateRoutes>
            <MyBooking></MyBooking>
          </PrivateRoutes>
        ),
      },

      //ADMIN ROUTES
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageplaces",
        element: (
          <AdminRoute>
            <ManagePlaces></ManagePlaces>
          </AdminRoute>
        ),
      },
      {
        path: "addplaces",
        element: (
          <AdminRoute>
            <AddPlaces></AddPlaces>
          </AdminRoute>
        ),
      },
      {
        path: "addevents",
        element: (
          <AdminRoute>
            <AddEvents></AddEvents>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
