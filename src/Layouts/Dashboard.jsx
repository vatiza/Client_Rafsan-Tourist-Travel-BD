import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isAdmin] = useState(true);
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className=" navbar-end flex-1">
            <a className="btn btn-ghost text-xl">Dashboard</a>
          </div>

          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li className="mt-12">
                <a>Home</a>
              </li>
              <li>
                <a>All Booking</a>
              </li>
              <li>
                <a>Add Places</a>
              </li>
              <li>
                <a>Add Events</a>
              </li>
              <li>
                <NavLink to="/dashboard/users">All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mt-12">
                <a>Home</a>
              </li>
              <li>
                <a>Booking</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
