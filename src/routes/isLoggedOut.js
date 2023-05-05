import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () =>{
const isLoggedOut = useSelector(state => state.auth.token)

    return(
        !isLoggedOut ? <Outlet/> : <Navigate to = "/admin"/>
    )

}

export default PrivateRoutes