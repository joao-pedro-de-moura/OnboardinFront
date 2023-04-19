import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () =>{
const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
console.log(isLoggedIn)
    return(
        !isLoggedIn ? <Navigate to = "/login"/> : <Outlet/>
    )

}

export default PrivateRoutes