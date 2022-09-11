import React from "react";
import logo from "../images/airbnb.svg";


export default function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <img src={logo}/>
            </nav>
        </div>
    );
}
