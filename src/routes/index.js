import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import PageErro from "../pages/error";
import LoggedIn from "./loggedIn";
import Logged from "./logged"
import User from "../pages/user"
import Register from "../pages/register"
import Admin from "../pages/admin"

export default function Routers(){

    return(
        <BrowserRouter>
        <Routes>
            <Route  element ={<LoggedIn/>} >
            <Route  path="/admin" element ={<Admin/>} />
            <Route  path="/" element ={<User/>} />
            </Route>
            <Route  element ={<Logged/>} >
            <Route  path="/register" element ={<Register/>} />
            <Route  path="/login" element ={<Login/>} />
            <Route  path="*" element ={<PageErro/>} />
            </Route>
         </Routes>
        </BrowserRouter>

    )

}