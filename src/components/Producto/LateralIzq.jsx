import { useState } from "react"
import images from "../../constants/images"
import DetalleProducto from '../Producto/DetalleProducto'
import CaracteristicasProducto from "./CaracteristicasProducto"
import SimilarProducto from "./SimilarProducto"
import TextoPublicacion from "./TextoPublicacion"

const LateralIzq = ({prod}) => {

  const [imagenActiva, setImagenActiva] = useState({});


  return (
    <div className="grid grid-cols-9">
        <div className="space-y-2">
            <img src= {prod.imagen} className= ' w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML'/>
            <img src= {prod.imagen} className= ' w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML'/>
            <img src= {prod.imagen} className= ' w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML'/>
            <img src= {prod.imagen} className= ' w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML'/>
            <img src= {prod.imagen} className= ' w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML'/>
            <img src= {prod.imagen} className= ' w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML'/>
        </div>
        <div className="col-span-4 ">
        <img src= {prod.imagen} className= 'w-full  object-contain h-[50vh]'/>
        </div>
        <div className="col-span-4">
        <DetalleProducto prod={prod}/>
        </div>
        <div className="col-span-9 p-6">

        <hr className=" mt-4 h-0"/>
        <SimilarProducto/>
        <hr className=" mt-4 h-0"/>
        <CaracteristicasProducto/>
        <hr className=" mt-4 h-0"/>
        <TextoPublicacion prod={prod}/>
        </div>
    </div>
  )
}

export default LateralIzq