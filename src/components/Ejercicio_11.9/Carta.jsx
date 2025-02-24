import React, { useState } from "react";
import styled from "styled-components";
const Imagen=styled.image({

});
const Componente=({src})=>{
    const[visible,setVisible]=useState(false);
    cambiaVisibilidad=()=>{
        setVisible(!visible);
    }
    return (
        <>
            <Imagen/>
            <p>{volteado}</p>
        </>
    )
}

export default Componente;