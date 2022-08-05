import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './Componets/Navbar/Navbar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import Counter from './Componets/Counter/Counter';
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {

/*   const handleAddAlCarrito = (cantidad) => {
    alert (`la cantidad agregada es: ${cantidad}`)
  } */

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarBoostrap />
        <Routes>
          <Route path = "/" element={<ItemListContainer mensajeBienvenida= "Hola, buscamos poder ofrecerte las mejores experiencias de la mano de valiosos recipientes de experiencias provenientes de los lugares más emblematicos." />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer mensajeBienvenida= 'Listado filtrado'/>}/>
          {/* <Route path = "/" element={ <Counter stock={10} addAlCarrito ={handleAddAlCarrito}/>}/> */}
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>  
        </Routes>
     </BrowserRouter>

       
    </div>
  );
}

export default App;
