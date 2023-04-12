import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login"
import PageErro from "../pages/error";


export default function Routers(){

    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element ={<Login/>} />
            <Route  path="*" element ={<PageErro/>} />
         </Routes>
        </BrowserRouter>

    )

}