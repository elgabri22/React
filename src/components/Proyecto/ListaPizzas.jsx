import React, { useEffect, useState } from "react";
import styled from "styled-components"; // Usando styled-components
import Pizza from "./Pizza"; // Asumimos que tienes un componente Pizza

const ListaContenedor = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
`;

// Contenedor individual para cada pizza
const PizzaContenedor = styled.div`
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    width: calc(33.33% - 20px);
    text-align: center;

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
`;


const ListaPizzas = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/pizzas")
            .then((response) => response.json())
            .then((data) => setPizzas(data))
            .catch((error) => console.error("Error al obtener pizzas:", error));
    }, [pizzas]);

    return (
        <ListaContenedor>
            {pizzas.map((pizza) => (
                <PizzaContenedor key={pizza.id}>
                    <Pizza
                        id={pizza.id}
                        nombre={pizza.nombre}
                        precio={pizza.precio}
                    />
                </PizzaContenedor>
            ))}
        </ListaContenedor>
    );
};

export default ListaPizzas;
