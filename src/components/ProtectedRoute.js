import { useSnackbar } from "notistack";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles = [] }) => {
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // Example role

  // if (!token) {
  //   enqueueSnackbar("You need to login to access this page", {
  //     variant: "warning",
  //   });
  //   return <Navigate to="/login" replace />;
  // }

  // if (roles.length > 0 && !roles.includes(userRole)) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return children;
};

export default ProtectedRoute;
