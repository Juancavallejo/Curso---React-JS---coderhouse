import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './Componets/Navbar/Navbar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartContextProvider} from './context/CartContext'


function App() {
 
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavbarBoostrap />
        <Routes>
          <Route path = "/" element={<ItemListContainer mensajeBienvenida= "Hola, buscamos poder ofrecerte las mejores experiencias de la mano de valiosos recipientes de experiencias provenientes de los lugares más emblematicos." />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer mensajeBienvenida= 'Listado productos de'/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>  
        </Routes>
     </BrowserRouter>
     </CartContextProvider>
    </div>
  );
}

export default App;
