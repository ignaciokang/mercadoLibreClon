import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

const DetalleProducto = ({prod}) => {
  return (
    <div className="p-4 space-y-2">
      <div className="flex justify-between">
        <p className="text-gray-500 my-auto">Nuevo | 30349 vendidos</p>
        <AiOutlineHeart className="text-CelesteML text-3xl" />
      </div>
      <h2 className="font-semibold text-2xl leading-tight">{prod.titulo}</h2>
      <div className="flex">
        <div className="flex text-CelesteML my-auto">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="text-gray-500 ml-6"> 2429 opiniones</p>
      </div>
      <div className="py-2">
          <h3 className="text-4xl">$ {prod.precio}</h3>
          <p>en <span className="text-green-600 font-semibold text-xl">6x $ {prod.precio/6} sin interés</span></p>
          <p className="text-CelesteML">Ver los medios de pago</p>
      </div>
      <p className="font-semibold text-sm">Lo que tenés que saber de este producto</p>
      <ul className="list-disc ml-4 text-gray-500">
          <li>Pantalla led de 24"</li>
          <li>Tiene una resolución de 1920px-1080px</li>
          <li>Relación de aspecto de 16.9</li>
          <li>Panel IPS</li>
          <li>Su brillo es de 250cd/m</li>
          <li>Tipos de conexión: D-Sub, HDMI, 1.4</li>
      </ul>
      <p className="text-CelesteML">Ver Características</p>
      <p>Opciones de compra</p>
      <p className="text-CelesteML">27 productos nuevos desde $29.999</p>
    </div>
  );
};

export default DetalleProducto;
