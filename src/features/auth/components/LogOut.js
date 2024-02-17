import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignOutAsync, selectLoggedInUser } from "../AuthSlice";
import { Navigate } from "react-router-dom";

export default function LogOut() {
  const dispatch = useDispatch();

  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(SignOutAsync());
    console.log("inside LogOut!!!!");
  });

  return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;
}
