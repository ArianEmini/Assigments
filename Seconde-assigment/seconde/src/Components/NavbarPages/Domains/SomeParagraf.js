import React from "react";
import {useState} from "react"
import Paragraf from "./Paragraf";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
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
        <p className="paragraf-domainAll">How does Parkname seperate itselft from other domain name parking companies?</p>
        <div className="space"></div>
        <button onClick={toggleOne}  className="buttonToggle">{stateOne?<FontAwesomeIcon onClick={()=>setOpenmyDomainsOne(!OpenmyDomainsOne)}   className="icone" icon={faAngleUp}/>:<FontAwesomeIcon onClick={()=>setOpenmyDomainsOne(!OpenmyDomainsOne)}   className="icone" icon={faAngleRight}/>}</button>
        </div>
     {OpenmyDomainsOne && <p className="ParaDomainAll">Your domains are a valuable online property.As in any investment,you wnat the mos efficient,easy way to make sure your 
     property is going to be profiltable.Do you own more than 1,000 domains?As a professional domainer,you will find everthing you need throught Parname to gererate maximum profits from domain portfolio.
     </p>  } 
     </div>

     <div className='TogglePossibleSome'>
        <div className="divi">
        <p className="paragraf-domainAll">Is Parkname Parking actually free?</p>
        <div className="space"></div>
        <button onClick={toggleTwo}  className="buttonToggle">{stateTwo?<FontAwesomeIcon onClick={()=>setOpenmyDomainsTwo(!OpenmyDomainsTwo)}   className="icone" icon={faAngleUp}/>:<FontAwesomeIcon onClick={()=>setOpenmyDomainsTwo(!OpenmyDomainsTwo)}   className="icone" icon={faAngleRight}/>}</button>
        </div>
     {OpenmyDomainsTwo && <p className="ParaDomainAll">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>  } 
     </div>

     <div className='TogglePossibleSome'>
        <div className="divi">
        <p className="paragraf-domainAll">What you do?</p>
        <div className="space"></div>
        <button onClick={toggleThree}  className="buttonToggle">{stateThree?<FontAwesomeIcon onClick={()=>setOpenmyDomainsThree(!OpenmyDomainsThree)}   className="icone" icon={faAngleUp}/>:<FontAwesomeIcon onClick={()=>setOpenmyDomainsThree(!OpenmyDomainsThree)}   className="icone" icon={faAngleRight}/>}</button>
        </div>
     {OpenmyDomainsThree && <p className="ParaDomainAll">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>   } 
     </div>
     <div className='TogglePossibleSome'>
        <div className="divi">
        <p className="paragraf-domainAll">When was Parkname first founded?</p>
        <div className="space"></div>
        <button onClick={toggleFour}  className="buttonToggle">{stateFour?<FontAwesomeIcon onClick={()=>setOpenmyDomainsFour(!OpenmyDomainsFour)}   className="icone" icon={faAngleUp}/>:<FontAwesomeIcon onClick={()=>setOpenmyDomainsFour(!OpenmyDomainsFour)}   className="icone" icon={faAngleRight}/>}</button>
        </div>
     {OpenmyDomainsFour && <p className="ParaDomainAll">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  } 
     </div>
     
       
        </div>
     );
}
 
export default SomeParagraf;