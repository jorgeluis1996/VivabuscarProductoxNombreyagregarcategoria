import './App.css';

import MainFooter from './common/MainFooter';
import MainNav from './common/MainNav';
import Inicio from './pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inversiones from './pages/Inversiones';
import Proveedores from './pages/Proveedores';
import Empleados from './pages/Empleados';
import Tienda from './pages/Tienda';
import ProductoDetalles from './pages/ProductoDetalles';
import Carrito from './pages/Carrito';
import Clientes from './pages/Clientes';
import Categorias from './pages/tablas/Categorias';


function App() {//Comentario JavaScript
  return (
    <>{/* Comentario */}
      <BrowserRouter>
        
        <MainNav />
        <main id="main-content">

          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/inversiones" element={<Inversiones/>} />
            <Route path="/proveedores" element={<Proveedores/>} />
            <Route path="/clientes" element={<Clientes/>} />
            <Route path="/empleados" element={<Empleados/>} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/productodetalles/:idproducto" element={<ProductoDetalles/>} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/categorias" element={<Categorias/>} />
          </Routes>

        </main>
        <MainFooter />
      </BrowserRouter>
    </>
  );
}

export default App;