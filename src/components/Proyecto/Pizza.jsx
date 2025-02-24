import React from "react";
import style from "styled-components";
import PropTypes, { number, string } from "prop-types";

const Pizza=({id,nombre,precio})=>{
    const borraPizza=(id)=>{
        fetch("http://localhost:53000/pizzas/"+id, {
            method: 'DELETE'
        }).then(response => response.json())
    }
    return(
        <>
            <div>
                <span>Id: {id}</span>
                <br></br>
                <span>Nombre: {nombre}</span>
                <br></br>
                <span>Precio: {precio}</span>
                <br></br>
                <br></br>
                <button onClick={()=>borraPizza(id)}>Borrar</button>
            </div>
        </>
    )
}

Pizza.propTypes={
    nombre: string.isRequired,
    precio: number.isRequired
}

export default Pizza;