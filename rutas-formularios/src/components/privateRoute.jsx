// components/PrivateRoute.jsx
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // o usa context

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
