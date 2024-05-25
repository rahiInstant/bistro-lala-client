import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import BeatLoader from "react-spinners/BeatLoader";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const Private = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <BeatLoader color="#36d7b7"></BeatLoader>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Private;
