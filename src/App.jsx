import { useState } from 'react';
import './App.css';
import FormularioNewPizza from './components/Proyecto/FormularioNewPizza';
import ListaPizzas from './components/Proyecto/ListaPizzas';
import Login from './components/Proyecto/Login';

const App = () => {
  const [isAutenticado,setAutenticado]=useState(false);
  if (isAutenticado){
    return (
      <>
        <FormularioNewPizza></FormularioNewPizza>
        <hr></hr>
        <ListaPizzas></ListaPizzas>
      </>
    );
  }else{
    return (
      <>
        <Login onLogin={setAutenticado}></Login>
      </>
    );
  }
  
};
export default App;
