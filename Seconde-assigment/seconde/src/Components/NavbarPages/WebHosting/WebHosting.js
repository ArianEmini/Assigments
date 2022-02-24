import React from "react";
import "./Webhosting.css"

const WebHosting = (props) => {
    const DomainsData=[
        {
          name:"Basic",
          listone:"Single website",
          listtwo:"50GB website space",
          listthree:"Free Domain for one your",
          listfour:"Standard features",
          buy:"$5.99/yr",
          oldbuy:"$10.99/yr",
          button:"Buy now"
        },
        {
          name:"Plus",
          listone:"Unlimited website",
          listtwo:"Unmeterd website space",
          listthree:"Free Domain for one your",
          listfour:"Standard features",
          listfive:"Essential features",
          buy:"$55.99/yr",
          oldbuy:"$10.99/yr",
          button:"Buy now"
        },
        {
            name:"Choice Plus",
            listone:"Unlimited website",
            listtwo:"Unmeterd website space",
            listthree:"Free Domain for one your",
            listfour:"1 Domain privacy",
            listfive:"Automated Backup",
            listsix:"Standard features",
            listseven:"Essential features",
            buy:"$55.99/yr",
            oldbuy:"$10.99/yr",
            button:"Buy now"
        },
        
      ]

    return ( 
<div className="WebHosting" >
    <div className="CardHosting">
        {DomainsData.map((dom)=>(
               <div className="Card-content-Hosting">
                   <h2>{dom.name}</h2>
                   <p className="paragrafHosting">Perfect for getting</p>
                <ul>
                   <li>{dom.listone}</li>
                   <li>{dom.listtwo}</li>
                   <li>{dom.listthree}</li>
                   <li>{dom.listfour}</li>
                   <li>{dom.listfive}</li>
                   <li>{dom.listsix}</li>
                   <li>{dom.listseven}</li>

                </ul>
                  <div className="Footer-Card">
                 <h4>Starting at $2.95/mo*</h4>
                 <p>normally $8.99</p>
                 <button className="buttonHosting">Select</button>
                 </div>
               </div>
               

        ))}
     

    </div>


    

</div>

     );
}
 
export default WebHosting;