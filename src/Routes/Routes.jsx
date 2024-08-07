import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import BookNow from "../Pages/BookNow/BookNow";
import Contactus from "../Pages/Contactus/Contactus";
import AddEvents from "../Pages/Dashboard/AddEvents/AddEvents";
import AddPhotos from "../Pages/Dashboard/AddPhotos/AddPhotos";
import AddPlaces from "../Pages/Dashboard/AddPlaces/AddPlaces";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManagePlaces from "../Pages/Dashboard/ManagePlaces/ManagePlaces";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import AllEvents from "../Pages/Events/AllEvents";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Packages/Details/Details";
import Packages from "../Pages/Packages/Packages";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";
import DistanceTable from "../Pages/Distances/Distance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/distance",
        element: <DistanceTable></DistanceTable>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/allevents",
        element: <AllEvents></AllEvents>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://server-rafsan-tourist-travel-bd.vercel.app/places/${params.id}`
          ),
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
          fetch(
            `https://server-rafsan-tourist-travel-bd.vercel.app/places/${params.id}`
          ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
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
        path: "/dashboard",
        element: <AdminHome></AdminHome>,
      },
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
        path: "addphotos",
        element: (
          <AdminRoute>
            <AddPhotos></AddPhotos>
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
