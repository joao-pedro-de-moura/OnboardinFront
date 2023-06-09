import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import PageErro from "../pages/error";
import IsLoggedIn from "./isLoggedIn";
import IsLoggedOut from './isLoggedOut'
import User from "../pages/user"
import Register from "../pages/register"
import Admin from "../pages/admin"
import IsAdmin from './isAdmin'

export default function Routers(){

    return(
        <BrowserRouter>
        <Routes>
            <Route  element ={<IsLoggedIn/>} >
                    <Route  element ={<IsAdmin/>} >
                        <Route  path="/admin" element ={<Admin/>} />
                    </Route>
                <Route  path="/user" element ={<User/>} />
            </Route>
            <Route  element ={<IsLoggedOut/>} >
                <Route  path="/" element ={<Login/>} />
                <Route  path="/register" element ={<Register/>} />
            </Route>    
                <Route  path="*" element ={<PageErro/>} />
         </Routes>
        </BrowserRouter>

    )

}