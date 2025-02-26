import React, { useState } from "react";
import style from "styled-components";
import PropTypes, { number, string } from "prop-types";

const Pizza=({id,nombre,precio})=>{
    const [isEditable,setEditable]=useState(false);
    const [nombreEdit, setNombreEdit] = useState(nombre);
    const [precioEdit, setPrecioEdit] = useState(precio);
    const borraPizza=(id)=>{
        fetch("http://localhost:3000/pizzas/"+id, {
            method: 'DELETE'
        }).then(response => response.json())
    }
    const editaPizza=(id)=>{
        setEditable(!isEditable);
        const pizza={
            id: id,
            precio: precioEdit,
            nombre: nombreEdit
        }

        fetch("http://localhost:3000/pizzas/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pizza)
        })
        .then(response => response.json())
    }
    const setEdita=()=>{
        setEditable(!isEditable);
    }
    if (isEditable){
        return(
            <>
                <div>
                    <span>Id: {id}</span>
                    <br></br>
                    <span>Nombre: </span>
                    <input
                        type="text"
                        value={nombreEdit}
                        onChange={(e) => setNombreEdit(e.target.value)}
                    />
                    <br></br>
                    <span>Precio: </span>
                    <input
                        type="number"
                        value={precioEdit}
                        onChange={(e) => setPrecioEdit(Number(e.target.value))}
                    />
                    <br></br>
                    <br></br>
                    <button onClick={()=>editaPizza(id)}>Editar</button>
                </div>
            </>
        )
    }else{
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
                    <button onClick={()=>setEdita()}>Editar</button>
                </div>
            </>
        )
    }
    
}

Pizza.propTypes={
    nombre: string.isRequired,
    precio: number.isRequired
}

export default Pizza;