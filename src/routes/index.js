import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import PageErro from "../pages/error";
import MyRoute from "./myRoute";
import User from "../pages/user"
import Register from "../pages/register"
import Admin from "../pages/admin"

export default function Routers(){

    return(
        <BrowserRouter>
        <Routes>
            <Route  element ={<MyRoute/>} >
            <Route  path="/admin" element ={<Admin/>} />
            <Route  path="/user" element ={<User/>} />
            <Route  path="/register" element ={<Register/>} />
            </Route>
            <Route  path="/" element ={<Login/>} />
            <Route  path="*" element ={<PageErro/>} />
         </Routes>
        </BrowserRouter>

    )

}