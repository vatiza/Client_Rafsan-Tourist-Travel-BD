import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useAuth from "../Hook/useAuth";
import { MdAdminPanelSettings } from "react-icons/md";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user } = useAuth();

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
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
          <div>
            <div className="flex items-center gap-3">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <h1>{user.displayName}</h1>
              {isAdmin ? (
                <MdAdminPanelSettings className="text-2xl text-red-600" />
              ) : (
                <></>
              )}
            </div>
            <p className="ms-16 -mt-4">Email: {user?.email}</p>
          </div>
          {isAdmin ? (
            <>
              <li className="mt-10">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a>All Booking</a>
              </li>
              <li>
                <NavLink to="/dashboard/manageplaces">Manage Places</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addplaces">Add Places</NavLink>
              </li>
              <li>
                <a>Add Events</a>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mt-12">
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/dashboard/mybooking">My Booking</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
