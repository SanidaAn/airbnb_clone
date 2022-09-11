import React from "react";
import logo from "../images/Group.png";


export default function Hero(){
    return(
        <div  className="hero">
           <img src={logo} className="imageHero"/>
                
                <h1 className="titleHero">Online Experiences</h1>
                <p className="paragraphHero">
                     Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
        </div>
    );
}