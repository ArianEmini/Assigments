import React from "react";
const Modal = (props) => {
 
    return ( 
      
  
        <div className="Modal">
            <div className="modal">
                <div className="Content">
                    <div className="header">
                         <h3>Theme Color</h3>
                         <a href="">Change Theme</a>

                    </div>
                    <div className="Body">
                        <div className="divi-1">
                        <p>Font Color</p>
                        <span className="color-1"></span>
                        <span>#4444</span><br></br>
                        <hr></hr>

                        </div>
                        <div className="divi-2">
                        <p>Background Color</p>
                        <span className="color-2"></span>
                        <span>#4444</span><br></br>
                        <hr></hr>

                        </div>
                        <div className="divi-3">
                        <p>Button Color</p>
                        <span className="color-3"></span>
                        <span>#4444</span><br></br>
                        <hr></hr>

                        </div>
                        <div className="divi-4">
                        <p>Button border Color</p>
                        <span className="color-4"></span>
                        <span>#4444</span><br></br>
                        <hr></hr>

                        </div>
                        <div className="divi-5">
                        <p>Border Mousover Color</p>
                        <span className="color-5"></span>
                        <span>#4444</span><br></br>
                        <hr></hr>

                        </div>
                             
                    </div>
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