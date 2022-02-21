import './App.css';
import React from 'react';
import Modal from './Componets/modal';
import {useState} from 'react';
import OutsideClickHandler from "react-outside-click-handler";


function App(props) {
  const [openmyModal,OpenModal]=useState(false);
  function Save(){
    OpenModal(false)
}
function Cancel(){
    OpenModal(false)
}
  return (
    <div className="App"  >
      <OutsideClickHandler onOutsideClick={()=>{
        OpenModal(false);
      }}>
      <header className="App-header">
         <button onClick={()=>OpenModal(true)}>Show popup</button>
      </header>
     
      { openmyModal && <Modal onSave={Save} onCancel={Cancel} />}

      </OutsideClickHandler>
    </div>
  );
}

export default App;
