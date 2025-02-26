import React, { useEffect, useState } from "react";
import style from "styled-components";
import Pizza from "./Pizza";

const ListaPizzas=({appear})=>{
    const [pizzas,setPizzas]=useState([]);
    const[appear1,setAppear]=useState(appear);
    useEffect(()=>{
        fetch("http://localhost:3000/pizzas")
            .then(response => response.json())
            .then(data => setPizzas(data))
            .catch(error => console.error("Error al obtener pizzas:", error));
    },[pizzas]);
    if (appear1){
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
    
}


export default ListaPizzas;