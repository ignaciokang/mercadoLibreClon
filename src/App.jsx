import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Producto from "./pages/Producto";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito/Carrito";
import { useState, useEffect } from "react";
import Aclaracion from "./components/Aclaracion";

function App() {
  const [carro, setCarro] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carro")) ?? [];
    setCarro(carritoLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("carro", JSON.stringify(carro));
  }, [carro]);

  const agregarCarrito = (producto) => {
    if (carro.some((articulo) => articulo.id === producto.id)) {
      const carritoActualizado = carro.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      setCarro(carritoActualizado);
    } else {
      setCarro([...carro, producto]);
    }
  };

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carro.map((articulo) => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });

    setCarro(carritoActualizado);
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carro.filter((articulo) => articulo.id !== id); 
    setCarro(carritoActualizado);
  }


  return (
    <div className="bg-FondoGris">
      <Router>
        <Header carro={carro}/>
        <Aclaracion/>
        <Routes>
          <Route path="/mercadoLibreClon/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/mercadoLibreClon/producto/:id"
            element={<Producto agregarCarrito={agregarCarrito} />}
          />
          <Route
            path="/mercadoLibreClon/carrito"
            element={
              <Carrito
                carro={carro}
                setCarro={setCarro}
                actualizarCantidad={actualizarCantidad}
                eliminarProducto= {eliminarProducto}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
