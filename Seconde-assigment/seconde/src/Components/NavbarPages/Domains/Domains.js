import React from "react";
import "./Domains.css"
const DomainsData=[
  {
    name:".COM",
    buy:"$5.99/yr",
    oldbuy:"$10.99/yr",
    button:"Buy now"
  },
  {
    name:".AI",
    buy:"$55.99/yr",
    oldbuy:"$10.99/yr",
    button:"Buy now"
  },
  {
    name:".NET",
    buy:"$7.99/yr",
    oldbuy:"$10.99/yr",
    button:"Buy now"
  },
  {
    name:".HEALTH",
    buy:"$7.99/yr",
    oldbuy:"$10.99/yr",
    button:"Buy now"
  },
  {
    name:".CO.UK",
    buy:"$3.99/yr",
    oldbuy:"$10.99/yr",
    button:"Buy now"
  },
  {
    name:".ORG",
    buy:"$15.99/yr",
    oldbuy:"$10.99/yr",
    button:"Buy now"
  }, {
    name:".CO",
    buy:"$26.33/yr",
    oldbuy:"$10.99/yr",
    button:"Buy now"
  },
  {
    name:".SEA",
    buy:"265.33/yr",
    oldbuy:"$10.99/yr",
    button:"Buy now"
  }
]

const Domains = (props) => {
  return ( 
<div className="Domains" >
<div className="Card">
 {DomainsData.map((dom)=>(

  <div className="Card-content">
    <h2>{dom.name}</h2>
    <h5>{dom.buy}</h5>
    <p>{dom.oldbuy}</p>
    <button>{dom.button}</button>
 </div>


 ))}

</div>
</div>

   );
}
 
export default Domains;