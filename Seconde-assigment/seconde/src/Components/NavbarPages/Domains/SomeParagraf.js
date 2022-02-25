import React from "react";
import {useState} from "react"
import Paragraf from "./Paragraf";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"
import {faAngleUp} from "@fortawesome/free-solid-svg-icons"

const SomeParagraf = () => {
    const [OpenmyDomainsOne,setOpenmyDomainsOne]=useState(false);
    const [OpenmyDomainsTwo,setOpenmyDomainsTwo]=useState(false);
    const [OpenmyDomainsThree,setOpenmyDomainsThree]=useState(false);
    const [OpenmyDomainsFour,setOpenmyDomainsFour]=useState(false);


  
    // const [state,setState]=useState(false);
    const [stateOne,setStateOne]=useState(false);
    const [stateTwo,setStateTwo]=useState(false);
    const [stateThree,setStateThree]=useState(false);
    const [stateFour,setStateFour]=useState(false);
    const [stateFive,setStateFive]=useState(false);

  

  const toggleOne=()=>{
    setStateOne(!stateOne)
  }
  const toggleTwo=()=>{
    setStateTwo(!stateTwo)
  }
  
  const toggleThree=()=>{
    setStateThree(!stateThree)
  }
  
  const toggleFour=()=>{
    setStateFour(!stateFour)
  }
  
  
 
  
    return ( 
        <div className="SomeParagraf">
            <div className='TogglePossibleSome'>
        <div className="divi">
        <p className="paragraf-domain">Why park a domain name in Parkname?</p>
        <div className="space"></div>
        <button onClick={toggleOne}  className="buttonToggle">{stateOne?<FontAwesomeIcon onClick={()=>setOpenmyDomainsOne(!OpenmyDomainsOne)}   className="icone" icon={faAngleUp}/>:<FontAwesomeIcon onClick={()=>setOpenmyDomainsOne(!OpenmyDomainsOne)}   className="icone" icon={faAngleDown}/>}</button>
        </div>
     {OpenmyDomainsOne && <p className="ParaDomainAll">une jam</p>  } 
     </div>

     <div className='TogglePossibleSome'>
        <div className="divi">
        <p className="paragraf-domain">Why park a domain name in Parkname?</p>
        <div className="space"></div>
        <button onClick={toggleTwo}  className="buttonToggle">{stateTwo?<FontAwesomeIcon onClick={()=>setOpenmyDomainsTwo(!OpenmyDomainsTwo)}   className="icone" icon={faAngleUp}/>:<FontAwesomeIcon onClick={()=>setOpenmyDomainsTwo(!OpenmyDomainsTwo)}   className="icone" icon={faAngleDown}/>}</button>
        </div>
     {OpenmyDomainsTwo && <p className="ParaDomainAll">une jam</p>  } 
     </div>

     <div className='TogglePossibleSome'>
        <div className="divi">
        <p className="paragraf-domain">Why park a domain name in Parkname?</p>
        <div className="space"></div>
        <button onClick={toggleThree}  className="buttonToggle">{stateThree?<FontAwesomeIcon onClick={()=>setOpenmyDomainsThree(!OpenmyDomainsThree)}   className="icone" icon={faAngleUp}/>:<FontAwesomeIcon onClick={()=>setOpenmyDomainsThree(!OpenmyDomainsThree)}   className="icone" icon={faAngleDown}/>}</button>
        </div>
     {OpenmyDomainsThree && <p className="ParaDomainAll">une jam</p>   } 
     </div>
     <div className='TogglePossibleSome'>
        <div className="divi">
        <p className="paragraf-domain">Why park a domain name in Parkname?</p>
        <div className="space"></div>
        <button onClick={toggleFour}  className="buttonToggle">{stateFour?<FontAwesomeIcon onClick={()=>setOpenmyDomainsFour(!OpenmyDomainsFour)}   className="icone" icon={faAngleUp}/>:<FontAwesomeIcon onClick={()=>setOpenmyDomainsFour(!OpenmyDomainsFour)}   className="icone" icon={faAngleDown}/>}</button>
        </div>
     {OpenmyDomainsFour && <p className="ParaDomainAll">une jam</p>  } 
     </div>
     
       
        </div>
     );
}
 
export default SomeParagraf;