import React, { useState } from "react";
import styled from "styled-components";

const FormularioNewPizza=()=>{
    const[nombre,setNombre]=useState("");
    const[precio,setPrecio]=useState(0);
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const pizza={
            precio: precio,
            nombre: nombre
        }
        fetch("http://localhost:3000/pizzas", {
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
            <FormContainer onSubmit={(e)=>handleSubmit(e)}>
                <FormGroup>
                    <Label>Nombre de la pizza:</Label>
                    <Input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Precio de la pizza:</Label>
                    <Input 
                        type="number" 
                        value={precio} 
                        onChange={(e) => setPrecio(Number(e.target.value) || 0)} 
                        required 
                    />
                </FormGroup>

                <SubmitButton type="submit">Crear pizza</SubmitButton>
            </FormContainer>
        );

   
}

export default FormularioNewPizza;

const FormContainer = styled.form`
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: auto;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

const SubmitButton = styled.button`
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    
    &:hover {
        background: #0056b3;
    }
`;