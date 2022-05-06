import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const PrivateRoute = ({ children }) => {
  const { authState } = useAuth();
  const location = useLocation();
  console.log("this is from private route", location);
  return authState ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
