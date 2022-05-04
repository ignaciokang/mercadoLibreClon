import { Link } from "react-router-dom"

const MiniaturaProducto = ({producto}) => {
  return (
    <div className="bg-white rounded-md shadow-sm shadow-gray-300 hover:shadow-md hover:shadow-gray-400">
      <a href= {`/producto/${producto.id}`}>
        <img src={producto.imagen} alt= 'Foto Producto' className="object-contain h-64 w-64 align-middle mx-auto"/>
        <div className="mt-[1px] p-5 h-2/3">
            <p className="text-[24px] tracking-wide">{producto.precio}</p>
            <p className="text-[16px]">6 x ${producto.precio/6} sin interés</p>
            <p className="text-[16px] text-green-600 font-bold">Envío gratis</p>
            <p className="">{producto.titulo}</p>
        </div>
      </a>
    </div>
  )
}

export default MiniaturaProducto

