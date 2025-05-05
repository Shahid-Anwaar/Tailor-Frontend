import { useSnackbar } from "notistack";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles = [] }) => {
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("email");

  if (!token) {
    enqueueSnackbar("You need to login to access this page", {
      variant: "warning",
    });
    return <Navigate to="/login" replace />;
  }



  return children;
};

export default ProtectedRoute;
