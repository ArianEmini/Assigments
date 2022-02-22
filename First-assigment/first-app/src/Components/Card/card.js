import React from "react";
// import image from "./DotCom_Logo_OnWhite.jpg"

import "./card.css"
const Card = (props) => {
    const {Datee,Color,Photo,Name,Description,Button,ColorName}=props;
    return (
        <div className="Card">
         <div className="Card-header">
           <p style={{color:"black"}}>{Datee}</p>
           <button style={{backgroundColor:`${Color}`}}>{ColorName}</button>
          
           <img className="image" src={Photo} />
          
           <span>{Name}</span>
         </div>
         <div className="Card-body">
        <p className="paragraf"> {Description}</p>
         <button className="btn-Download">{Button}</button>
         </div>
 
        </div>
      );
}
 
export default Card;