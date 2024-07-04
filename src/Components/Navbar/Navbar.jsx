import { BsLuggageFill } from "react-icons/bs";
import { HiMiniHome } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">
          <HiMiniHome /> Home
        </Link>
      </li>

      <li>
        <Link to="/packages">
          <BsLuggageFill />
          Packages
        </Link>
      </li>
      <li>
        <Link to="/contactus">
          <MdEmail />
          Contact Us
        </Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="font-avro text-3xl font-bold hidden lg:flex">
          Rafsan Tourist & Travel <span className="text-green-600">BD</span>
        </a>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
