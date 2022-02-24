import React from "react";
import "./Webhosting.css"

const WebHosting = (props) => {
    const DomainsData=[
        {
          name:"Basic",
          listone:"1.Single website",
          listtwo:"2.50GB website space",
          listthree:"3.Free Domain for one your",
          listfour:"4.Standard features",
          buy:"$5.99/yr",
          oldbuy:"$10.99/yr",
          button:"Buy now"
        },
        {
          name:"Plus",
          listone:"1.Unlimited website",
          listtwo:"2.Unmeterd website space",
          listthree:"3.Free Domain for one your",
          listfour:"4.Standard features",
          listfive:"5.Essential features",
          buy:"$55.99/yr",
          oldbuy:"$10.99/yr",
          button:"Buy now"
        },
        {
            name:"Choice Plus",
            listone:"1.Unlimited website",
            listtwo:"2.Unmeterd website space",
            listthree:"3.Free Domain for one your",
            listfour:"5. 1 Domain privacy",
            listfive:"6.Automated Backup",
            listsix:"7.Standard features",
            listseven:"8.Essential features",
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
                 <h4>Starting at $2.95/mo*</h4>
                 <del >normally $8.99</del>
                 <button className="buttonHosting">Select</button>
               </div>
               

        ))}
     

    </div>


    

</div>

     );
}
 
export default WebHosting;