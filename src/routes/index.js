import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import PageErro from "../pages/error";
import MyRoute from "./myRoute";


export default function Routers(){

    return(
        <BrowserRouter>
        <Routes>
            <Route  element ={<MyRoute/>} >
            <Route  path="/login" element ={<Login/>} />
            </Route>
            <Route  path="/" element ={<PageErro/>} />
         </Routes>
        </BrowserRouter>

    )

}