import { useState } from 'react';
import './App.css';
import FormularioNewPizza from './components/Proyecto/FormularioNewPizza';
import ListaPizzas from './components/Proyecto/ListaPizzas';
import Login from './components/Proyecto/Login';

const App = () => {
  return (
    <>
      <Login></Login>
      <FormularioNewPizza appear={false}></FormularioNewPizza>
      <ListaPizzas appear={false}></ListaPizzas>
    </>
  );
};
export default App;
