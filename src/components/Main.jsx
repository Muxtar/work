import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Cards";
import Chat from "./Chat";

function Main(){
    return(
        <div className="base">
            <div className="in-base">
                <Routes>
                    <Route path="chat" element={<Chat/>}/>       
                    <Route path="card" element={<Cards/>} />
                </Routes>
            </div>
        </div>
    )
}


export default Main;