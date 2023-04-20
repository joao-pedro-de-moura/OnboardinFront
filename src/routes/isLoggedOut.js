import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () =>{
const isLoggedIn = useSelector(state => state.auth.token)
console.log(isLoggedIn)
    return(
        !isLoggedIn ? <Outlet/> : <Navigate to = "/admin"/>
    )

}

export default PrivateRoutes