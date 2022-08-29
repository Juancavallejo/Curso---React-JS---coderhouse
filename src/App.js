import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './Componets/Navbar/Navbar';
import Footer from './Componets/Footer/Footer';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';
import Cart from './Componets/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import { FormContextProvider } from './context/FormContext';
import Checkout from './Componets/Checkout/Checkout';


function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <FormContextProvider>
        <BrowserRouter>
          <NavbarBoostrap />
          <Routes>
            <Route path="/" element={<ItemListContainer mensajeBienvenida="Hola, buscamos poder ofrecerte las mejores experiencias de la mano de valiosos recipientes de experiencias provenientes de los lugares más emblematicos." />} />
            <Route path='/category/:categoryId' element={<ItemListContainer mensajeBienvenida='Listado productos de' />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer mensajeBienvenida='Conoce más sobre:'/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element= {<Checkout/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
        </FormContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
