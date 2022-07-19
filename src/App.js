import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './Componets/Navbar/Navbar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';


function App() {

  return (
    <body className="App">
        <NavbarBoostrap />
        <ItemListContainer MensajeBienvenida= "Hola, buscamos poder ofrecerte las mejores experiencias de la mano de valiosos recipientes de experiencias provenientes de los lugares más emblematicos" />
    </body>
  );
}

export default App;
