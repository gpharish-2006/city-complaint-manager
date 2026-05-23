import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

function ProtectedAdminRoute({ children }) {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {

    const decoded = jwtDecode(token);

    if (decoded.role !== "admin") {
        toast.warning("Access Denied: You are not an admin.");
      return <Navigate to="/" />;
    }

    return children;

  } catch (err) {

    return <Navigate to="/login" />;

  }
}

export default ProtectedAdminRoute;