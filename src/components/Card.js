import React from 'react';
import logo from "../images/image_12.png";
import group from "../images/Group65.png";
import logo2 from "../images/wedding-photography.png";
import group2 from "../images/Group78.png";
import logo3 from "../images/mountain-bike.png";
import group3 from "../images/Group79.png";


export default function Card(){
    return(
        <div className='section'>

            <div className='cardOne'>
            <h5>SOLD OUT</h5>
                <img src={logo} className='imgOne'/>
                <img src={group} className='imgTwo'/>
            </div>

            <div className='cardTwo'>
            <h5>ONLINE</h5>
                <img src={logo2} className='imgOne'/>
                <img src={group2} className='imgTwo'/>
            </div>

            <div className='cardThree'>
                <img src={logo3} className='imgOne'/>
                <img src={group3} className='imgTwo'/>
            </div>
            
        </div>
    )
}