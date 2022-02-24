import React,{useState}  from 'react';
import "./navbar.css"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Domains from "../NavbarPages/Domains";
import WebHosting from "../NavbarPages/WebHosting";
import DedicatedServers from "../NavbarPages/DedicatedServers";
import VirtualCloudServers from "../NavbarPages/VirtualCloud Servers";
import WorpresHosting from "../NavbarPages/WordPressHosting";
import EmailHosting from "../NavbarPages/EmailHosting";
import VPSHosting from "../NavbarPages/VPSHostingServers";
import FreeHosting from "../NavbarPages/FreeHosting";
// import {Tabs,Tab,AppBar} from "@material-ui/core";

const NavbarResponse = () => {
    const [value,setvalue]=useState(0);
    const handlerTabls=(e,val)=>{
   setvalue(val)
  }
    return (
      
        <div className="Navbar">
  
            {/* <Router>
             <nav>
                 <ul>
                     <li>
                         <Link style={{textDecoration:"none",paddingTop:"6%",color:"gray"}} to='/Domains'>Domains</Link>
                         <Link style={{textDecoration:"none",paddingTop:"6%",color:"gray"}} to='/WebHosting'>WebHosting</Link>
                         <Link style={{textDecoration:"none",paddingTop:"6%",color:"gray"}} to='/DedicatedServers'>Dedicated Servers</Link>
                         <Link style={{textDecoration:"none",paddingTop:"6%",color:"gray"}} to='/VirtualCloudServers'>Virtual Cloud Servers</Link>
                         <Link style={{textDecoration:"none",paddingTop:"6%",color:"gray"}} to='/WordPressHosting'>WordPress Hosting</Link>
                         <Link style={{textDecoration:"none",paddingTop:"6%",color:"gray"}} to='/EmailHosting'>Email Hosting</Link>
                         <Link style={{textDecoration:"none",paddingTop:"6%",color:"gray"}} to='/VPSHostingServers'>VPS Hosting Servers</Link>
                         <Link style={{textDecoration:"none",paddingTop:"6%",color:"gray"}} to='/FreeHosting'>Free Hosting</Link>

                     </li>

                 </ul>
             </nav>
             <Switch>
                 <Route path="/Domains"  component={Domains} />
             </Switch>
             <Switch>
                 <Route path="/WebHosting"  component={WebHosting}/>
             </Switch>
             <Switch>
                 <Route path="/DedicatedServers" component={DedicatedServers}/>
             </Switch>
             <Switch>
                 <Route path="/VirtualCloudServers" component={VirtualCloudServers}/>
             </Switch>
             <Switch>
                 <Route path="/WordPressHosting" component={WorpresHosting}/>
             </Switch>
             <Switch>
                 <Route path="/EmailHosting" component={EmailHosting}/>
             </Switch>
             <Switch>
                 <Route path="/VPSHostingServers" component={VPSHosting}/>
             </Switch>
             <Switch>
                 <Route path="/FreeHosting" component={FreeHosting}/>
             </Switch>





             </Router> */}
        </div>
      );
}
 
export default NavbarResponse;