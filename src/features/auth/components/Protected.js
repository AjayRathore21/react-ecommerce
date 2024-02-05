import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../AuthSlice";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const user = useSelector(selectLoggedInUser);

  if (!user) {

   return  <Navigate replace={true} to='/login'></Navigate>
  }

  return children;
}


export default Protected;

