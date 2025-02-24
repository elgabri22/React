import React, { useEffect, useState } from "react";
import style from "styled-components";
import Pizza from "./Pizza";
import PropTypes from "prop-types";

const ListaPizzas=()=>{
    const [pizzas,setPizzas]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:53000/pizzas")
            .then(response => response.json())
            .then(data => setPizzas(data))
            .catch(error => console.error("Error al obtener pizzas:", error));
    },[pizzas]);
    return(
        <>
            <div>
                {pizzas.map(pizza=>(
                    <Pizza
                        key={pizza.id}
                        id={pizza.id}
                        nombre={pizza.nombre}
                        precio={pizza.precio}
                    />
                ))}
                
            </div>
        </>
    )
}


export default ListaPizzas;