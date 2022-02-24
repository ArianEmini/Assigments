import './App.css';
import React,{useState} from 'react';
import {Tabs,Tab,AppBar} from "@material-ui/core";
import 'react-tabs/style/react-tabs.css';
import WebHosting from './Components/NavbarPages/WebHosting';
import Domains from './Components/NavbarPages/Domains';
import DedicatedServers from './Components/NavbarPages/DedicatedServers';
import VirtualCloudServers from './Components/NavbarPages/VirtualCloud Servers';
import WorpresHosting from './Components/NavbarPages/WordPressHosting';
import EmailHosting from './Components/NavbarPages/EmailHosting';
import VPSHostingServers from './Components/NavbarPages/VPSHostingServers';
import FreeHosting from './Components/NavbarPages/FreeHosting';
import NavbarResponse from './Components/NavbarToogle/Navabr';
function App() {

  const [value,setvalue]=useState(0);
  const handlerTabls=(e,val)=>{
 setvalue(val)
}
  return (
    <div className="App">
     
        {/* <NavbarResponse/> */}

      
      <header className='header-app'>
      <AppBar className='Appbar'>
         <Tabs className="Tabs" value={value} onChange={handlerTabls}
    
         
         
         >
           <Tab style={{fontSize:"8px"}} label="Domains"></Tab>
           <Tab style={{fontSize:"8px" }} label="Web Hosting"></Tab>
           <Tab style={{fontSize:"8px" }} label="Deticeted Servise"></Tab>
           <Tab style={{fontSize:"8px"}} label="Virtual Cloud Servise"></Tab>
           <Tab style={{fontSize:"8px"}} label="Wordpress Hosting"></Tab>
           <Tab style={{fontSize:"8px"}} label="Email Hosting"></Tab>
           <Tab style={{fontSize:"8px"}} label="VPS Hosting Servise"></Tab>
           <Tab style={{fontSize:"8px",paddingRight:"5%"}} label="Free Hosting"></Tab>

           
         </Tabs>
        
    </AppBar>
      </header>
  
       {value===0 && <Domains/>}
       {value===1 && <WebHosting/>}
       {value===2 && <DedicatedServers/>}
       {value===3 && <VirtualCloudServers/> }
       {value===4 && <WorpresHosting/>}
       {value===5 && <EmailHosting/>}
       {value===6 && <VPSHostingServers/>}
       {value===7 && <FreeHosting/>} 



      
    </div>
  );
}

export default App;
