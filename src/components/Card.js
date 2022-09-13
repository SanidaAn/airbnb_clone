import React from 'react';
import star from "../images/Star.png";


export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        // <div className='section'>

            <div className='cardOne'>
                            {badgeText && <h5>{badgeText}</h5>}

                {/* {props.openSpots === 0 ? <h5>SOLD OUT</h5>:<h5>ONLINE</h5>} */}
                {/* console.log({badgeText}); */}
                    <img src={`../img/${props.img}`} className='imgOne'/>
                    <div className='txtCardContainer'>
                        <img src={star}/>
                        <span className='greyTxt'> {props.rating}</span>
                        <span className='greyTxt'> ({props.reviewCount}) &#xB7; </span>
                        <span className='greyTxt'>{props.location}</span>
                    </div>
                    <div className='cardTitle'>{props.title}</div>
                    <div className="cardPrice"><b>From {props.price}€</b> / person</div>
                    {/* <div>{props.description}</div> */}

            </div>
        // </div>

        
    )
}