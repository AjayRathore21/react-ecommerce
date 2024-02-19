import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../AuthSlice";
import { Navigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  const user = useSelector(selectLoggedInUser);

  if (!user) {
    return <Navigate replace={true} to="/login"></Navigate>;
  }

  if (user && user.role !== "admin") {
    return <Navigate replace={true} to="/"></Navigate>;
  }

  {
    console.log("inside protected routes!--> pass as admin");
  }

  return children;
}

export default ProtectedAdmin;
