import ReactDOM from "react-dom";
import React from "react"
import Style from "./Backdrop.module.css"


function Backdrop(){
    return(
        <div className={Style.Backdrop}>

        </div>
    )
}

function ModalOverlay(props){
    return(
        <div>
            {props.children}
        </div>
    )
}

const parentElement = document.getElementById("OverLay");
console.log(parentElement)

function Modal(props){
<React.Fragment>
    {ReactDOM.createPortal(<Backdrop></Backdrop>,parentElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,parentElement)}
</React.Fragment>

}

export default Backdrop;