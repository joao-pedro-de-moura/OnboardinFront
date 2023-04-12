import React from "react";
import { Outlet, Navigate } from "react-router-dom";


const PrivateRoutes = () =>{
const auth ={'token': true}
    return(
        auth.token ? <Outlet/> : <Navigate to = "/"/>
    )

}

export default PrivateRoutes