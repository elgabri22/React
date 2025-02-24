import React, { useState } from "react";

const FormularioNewPizza=()=>{
    const[nombre,setNombre]=useState("");
    const[precio,setPrecio]=useState(0);
    const handleSubmit=()=>{
        const pizza={
            precio: precio,
            nombre: nombre
        }
        fetch("http://localhost:53000/pizzas", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(pizza)
        }).then(response => response.json())
    }

    const ChangePrecio=(precio)=>{
        setPrecio(parseInt(precio));
    }

    const ChangeNombre=(nombre)=>{
        setNombre(nombre);
    }

    return(
        <>
            <form method="POST">
                <div>
                    <label>Nombre de la pizza:</label>
                    <input type="text" name="nombre" value={nombre} onChange={(e)=>ChangeNombre(e.target.value)} required/>
                </div>

                <div>
                    <label>Precio de la pizza:</label>
                    <input type="number" name="precio" value={precio} onChange={(e)=>ChangePrecio(e.target.value)} required/>
                </div>

                <button type="button" onClick={()=>handleSubmit()}>Crear pizza</button>
            </form>
        </>
    );
}

export default FormularioNewPizza;