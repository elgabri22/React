import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";


const LoginContenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

// Estilo para el formulario de login
const LoginFormulario = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

// Estilo para los campos de texto (input)
const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

// Estilo para el botón
const Boton = styled.button`
  width: 40%;
  margin-left: 5%;
  margin-top: 4%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #00408d;
  }

  &:focus {
    outline: none;
  }
`;

// Estilo para el título
const Titulo = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const MensajeError = styled.p`
  margin-bottom: 20px;
  color: red;
`;

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  // Función para el login
  const login = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: usuario, // Usa el 'usuario' como 'email'
          password: password, // Usa 'password'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Aquí se devolverá el token de acceso
        localStorage.setItem("token", data.token); // Guarda el token
        onLogin(true); // Cambia el estado del login
      } else {
        console.log("Error en la autenticación");
        setMensajeError("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al hacer login:", error);
      setMensajeError("Hubo un error al hacer login");
    }
  };

  const registrar = async () => {
    if (!usuario || !password) {
      setMensajeError("Usuario y contraseña son obligatorios");
      return;
    }
  
    try {
      const response = await axios.get("http://localhost:3000/users", {
        params: { email: usuario },
      });
  
      const usuarioExiste = response.data.length > 0;
  
      if (usuarioExiste) {
        setMensajeError("Este usuario ya existe");
        onLogin(false);
        return;
      }
      const registroResponse = await axios.post("http://localhost:3000/register", {
        email: usuario,
        password: password,
      });
  
      if (registroResponse.data.accessToken) {
        localStorage.setItem("token", registroResponse.data.accessToken); // Guarda el token JWT
        setMensajeError("");
        onLogin(true); // Cambia el estado del login
      }
    } catch (error) {
      console.error("Error en el registro:", error.response?.data || error.message);
      setMensajeError("Hubo un error al registrar el usuario");
    }
  };

  const ChangeUsuario = (usuario) => {
    setUsuario(usuario);
  };

  const ChangePassword = (password) => {
    setPassword(password);
  };

  return (
    <LoginContenedor>
      <LoginFormulario>
        <Titulo>Iniciar sesión</Titulo>
        <Input
          type="text"
          name="usuario"
          value={usuario}
          placeholder="Usuario"
          onChange={(e) => ChangeUsuario(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => ChangePassword(e.target.value)}
        />
        <Boton type="button" onClick={() => login()}>
          Entrar
        </Boton>
        <Boton type="button" onClick={() => registrar()}>
          Registrar
        </Boton>
        <MensajeError>{mensajeError}</MensajeError>
      </LoginFormulario>
    </LoginContenedor>
  );
};

export default Login;

