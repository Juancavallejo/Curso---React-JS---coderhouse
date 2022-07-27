import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './Componets/Navbar/Navbar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import Counter from './Componets/Counter/Counter';


function App() {

  const handleAddAlCarrito = (cantidad) => {
    alert (`la cantidad agregada es: ${cantidad}`)
  }

  return (
    <div className="App">
        <NavbarBoostrap />
        <ItemListContainer MensajeBienvenida= "Hola, buscamos poder ofrecerte las mejores experiencias de la mano de valiosos recipientes de experiencias provenientes de los lugares más emblematicos" />
        <Counter stock={10} addAlCarrito ={handleAddAlCarrito}/>
    </div>
  );
}

export default App;
