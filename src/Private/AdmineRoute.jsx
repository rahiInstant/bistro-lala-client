import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdmineRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [data, isPending] = useAdmin();
  // const location = useLocation();
  if (loading || isPending) {
    return "loading...";
  }

  if (user && data) {
    return children;
  }

  return <Navigate to="/dashboard" ></Navigate>;
};

export default AdmineRoute;
