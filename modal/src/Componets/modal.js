import React from "react";
const Modal = (props) => {
    const Color=[
        {
            title:'Font Color',
            color:"#3d3d3d",
            text:"#3d3d3d",
        },
        {
            title:'Background Color',
            color:"#fffdfd",
            text:"#fffdfd",
        },
        {
            title:'Button Color',
            color:"#522ef1",
            text:"#522ef1",
        },
        {
            title:'Button border Color',
            color:"#113af0",
            text:"#113af0",
        },
        {
            title:'Border Mousover Color',
            color:"#0a0092",
            text:"#0a0092",
        },
        
      ];
      
    return ( 
      
  
        <div className="Modal">
            <div className="modal">
                <div className="Content">
                
                    <div className="header">
                        
                         <h3>Theme Color</h3>
                         <div className="space"></div>
                         <a href="">Change Theme</a>
                        
                    </div>
                    {Color.map((col)=>(

                    
                    <div className="Body">
                        <div className="divi-1">
                        <p>{col.title}</p>
                        <span className="color-1" style={{backgroundColor:`${col.color}`}}></span>
                        <span>{col.text}</span><br></br>
                        <hr></hr>

                        </div>

                       
                        {/* <div className="divi-2" style={{backgroundColor:`${col.colorOne}`}}>
                        <p>Background Color</p>
                        <span className="color-2"></span>
                        <span>{col.textOne}</span><br></br>
                        <hr></hr>

                        </div>
                        <div className="divi-3">
                        <p>Button Color</p>
                        <span className="color-3" style={{backgroundColor:`${col.colorTwo}`}}></span>
                        <span>{col.textTwo}</span><br></br>
                        <hr></hr>

                        </div>
                        <div className="divi-4">
                        <p>Button border Color</p>
                        <span className="color-4" style={{backgroundColor:`${col.colorThree}`}}></span>
                        <span>{col.textThree}</span><br></br>
                        <hr></hr>

                        </div>
                        <div className="divi-5">
                        <p>Border Mousover Color</p>
                        <span className="color-5" style={{backgroundColor:`${col.colorFour}`}}></span>
                        <span>{col.colorFour}</span><br></br>
                        <hr></hr>

                        </div> */}
                             
                    </div>
                    ))}
                    <div className="header">
                    <button className="Save" onClick={props.onSave}>Save</button>
                    <button className="Cancel" onClick={props.onCancel}>Cancel</button>

                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default Modal;