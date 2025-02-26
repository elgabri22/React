import React, { useState } from "react";

const Login=()=>{
    const [usuario,setUsuario]=useState("");
    const [password,setPassword]=useState("");
    const[appear1,setAppear]=useState(appear);

    const setNombre=(nombre)=>{
        setUsuario(nombre);
    }

    const setContrasena=(password)=>{
        setPassword(password);
    }

    if (appear1){
        return (
            <div>
                <label>Usuario:</label>
                <input type="text" value={usuario} onChange={(e)=>setNombre(e.target.value)}></input>
                <br></br>
                <label>Contraseña:</label>
                <input type="text" value={password} onChange={(e)=>setContrasena(e.target.value)}></input>
                <br></br>
                <button>LOGIN</button>
            </div>
        )
    }else{
        
    }

    
}

export default Login;