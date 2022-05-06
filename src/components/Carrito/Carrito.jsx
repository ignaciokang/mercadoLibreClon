import UltimaVisita from "../Home/Publicaciones/UltimaVisita";
import ProductosCarrito from "./ProductosCarrito";
import { BiChevronDown } from "react-icons/bi";
import { useEffect, useState } from "react";

const Carrito = ({ carro, setCarro, actualizarCantidad, eliminarProducto }) => {
  const saludo = () => {
    setCarro([]);
  };

  const [totalCompra, setTotalCompra] = useState(0);

  const sumaProducto = (producto) => {
    setTotalCompra(totalCompra + producto.total);
  };

  useEffect(() => {
    const calculoTotal = carro.reduce( (total, producto) => total + (producto.cantidad) * (producto.precio), 0);
    setTotalCompra(calculoTotal)
  }, [carro]);

  return (
    <div className="w-4/5 mx-auto ">
      <div className="bg-white my-8 rounded-lg overflow-hidden shadow-md shadow-gray-300 border-0 p-24">
        <p className="text-xl font-semibold px-12 underline underline-offset-[1.7rem]">
          Carrito
        </p>
        <hr className="mt-6 mb-12" />
        {carro.length === 0 ? (
          <div className="text-center text-lg text-gray-400 space-y-4">
            <h2 className="text-3xl text-black">Tu carrito está vacío</h2>
            <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
            </div>
        ) : (
          <div>
            {carro.map((producto) => {
              return (
                <div className="grow">
                  <ProductosCarrito
                    producto={producto}
                    key={producto.id}
                    actualizarCantidad={actualizarCantidad}
                    eliminarProducto={eliminarProducto}
                  />
                  <hr className="my-12" />
                </div>
              );
            })}
            <div className="flex flex-col items-end">
              <p className="text-CelesteML text-xl flex items-center mb-6 ">
                Envío a Metán 4070, Boedo
                <BiChevronDown className="ml-2" />{" "}
                <span className="text-green-600 text-2xl font-normal ml-24">
                  Gratis
                </span>
              </p>
              <p className="text-3xl space-x-12 ">
                Total con envío <span className="ml-24">{totalCompra}</span>
              </p>
              <button
                className="w-64 bg-CelesteML p-3 rounded-lg text-white font-semibold text-lg mt-16"
                onClick={saludo}
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
      <UltimaVisita />
    </div>
  );
};

export default Carrito;
