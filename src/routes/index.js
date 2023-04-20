import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import PageErro from "../pages/error";
import IsLoggedIn from "./isLoggedIn";

import User from "../pages/user"
import Register from "../pages/register"
import Admin from "../pages/admin"

export default function Routers(){

    return(
        <BrowserRouter>
        <Routes>
            <Route  element ={<IsLoggedIn/>} >
            <Route  path="/admin" element ={<Admin/>} />
            <Route  path="/user" element ={<User/>} />
            </Route>
            <Route  path="/login" element ={<Login/>} />
            <Route  path="/register" element ={<Register/>} />
            <Route  path="*" element ={<PageErro/>} />
         </Routes>
        </BrowserRouter>

    )

}