import { MdOutlineLocalShipping, MdStorefront } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsArrowReturnLeft, BsShieldCheck, BsTrophy } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const CompraAhora = ({prod, agregarCarrito}) => {


console.log(prod);
const {id, titulo, precio, imagen, descripcion} = prod;
const [cantidad, setCantidad] = useState(1);

const handleSubmit = (e) => {
  e.preventDefault();

  if (cantidad < 1) {
    alert('Cantidad incorrecta');
    return;
}
  //Agregar al carrito
  const productoSeleccionado = {
      id,
      imagen,
      precio,
      titulo,
      descripcion,
      cantidad
  };
  agregarCarrito(productoSeleccionado)
}

  return (
    <div className="p-6 border-[1px] border-gray-200 rounded-lg space-y-4">
    <div className="flex text-green-500 text-lg ">
      <MdOutlineLocalShipping className="text-2xl mr-3" />
      <div>
        <div className="flex items-center">
          <p>
            Llega gratis <span className="font-bold">mañana</span>
          </p>
        </div>
        <div className="flex text-CelesteML items-center">
          <GoLocation className="mr-2" />
          <p className="text-[16px]">Enviar a Metán 4072</p>
        </div>
      </div>
    </div>
    <div className="flex text-green-500 text-lg ">
      <MdStorefront className="text-4xl mr-3" />
      <div>
        <div className="flex">
          <p>
            Retirá gratis{" "}
            <span className="font-bold">a partir del lunes </span>en correos y
            otros puntos
          </p>
        </div>
        <div className="flex text-CelesteML">
          <p className="text-[16px]">Ver en mapa</p>
        </div>
      </div>
    </div>
    <div>
      <p>
        Vendido por <span className="text-CelesteML">TIENDA-LIDER</span>
      </p>
      <p>101.815 ventas</p>
      <p className="text-[13px] text-gray-400">Hace Factura A</p>
    </div>
    <p className="font-semibold">Stock disponible</p>
    <form onSubmit={handleSubmit}>
    <div className="flex items-center mb-8">
      <p>
        Cantidad: 
        <select className="font-semibold border ml-4" value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))}>
          <option value="1">1 unidad</option>
          <option value="2">2 unidades</option>
          <option value="3">3 unidades</option>
          <option value="4">4 unidades</option>
        </select>
      </p>{" "}
    </div>
    <div>
      <a href='/carrito'>
       <p className="w-full bg-CelesteML p-3 rounded-lg text-white font-semibold text-lg mb-2 cursor-pointer text-center hover:bg-blue-400 ease-in transition-colors">Comprar ahora</p>      
      </a>

      <input type="submit" value="Agregar al carrito" className="w-full bg-blue-100 p-3 rounded-lg text-CelesteML font-semibold text-lg mb-2 cursor-pointer hover:bg-blue-200 ease-in transition-colors"/>
    </div>
    </form>
    <div className="flex text-gray-500 ">
      <BsArrowReturnLeft className="mr-3 text-xl" />
      <p>
        <span className="text-CelesteML">Devolución gratis.</span> Tenés 30
        días desde que lo recibís.
      </p>
    </div>
    <div className="flex text-gray-500 ">
      <BsShieldCheck className="mr-3 text-4xl" />
      <p>
        <span className="text-CelesteML">Compra protegida.</span> Recibí el
        producto que esperabas o te devolvemos tu dinero.
      </p>
    </div>
    <div className="flex text-gray-500 ">
      <BsTrophy className="mr-3 text-xl" />
      <p>
        <span className="text-CelesteML">Mercado Puntos.</span> Sumás 393
        puntos.
      </p>
    </div>
  </div>
  )
}

export default CompraAhora