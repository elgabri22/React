import './App.css';
import Counter from './components/Ejercicio_11.1/11.1_Component';
import FormularioNewPizza from './components/Proyecto/FormularioNewPizza';
import ListaPizzas from './components/Proyecto/ListaPizzas';

const App = () => {
  return (
    <>
      <FormularioNewPizza></FormularioNewPizza>
      <ListaPizzas></ListaPizzas>
    </>
  );
};
export default App;
