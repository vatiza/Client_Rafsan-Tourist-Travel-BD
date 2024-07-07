import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

import ClockLoader from "react-spinners/ClockLoader";
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <ClockLoader color="#1b08ff" />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
