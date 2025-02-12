import React from "react";
import "../Ejercicio_7.2/cssStyledBox.css";


const StyledBox=({texto})=>{
    return (
        <div id="div">
            <p>{texto}</p>
        </div>
    );
}

export default StyledBox;