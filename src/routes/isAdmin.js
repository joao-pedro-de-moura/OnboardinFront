import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () =>{
    const is_admin = useSelector(state => state.auth.user.is_admin)
    
    
    return(
        is_admin === false ? <Navigate to = "/user"/>  : <Outlet/>
        
    )
 
}

export default PrivateRoutes