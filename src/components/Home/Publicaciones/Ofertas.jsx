import MiniaturaProducto from "../MiniaturaProducto"
import ListadoProductos from "../../../constants/ListadoProductos"

const Ofertas = () => {
  return (
    <div className="my-12">
        <h2 className="my-6 text-2xl text-gray-500">Ofertas<button className="text-CelesteML text-[18px] ml-4">Ver más</button></h2>
        <div className="grid grid-cols-5 space-x-4">

          {ListadoProductos.map((producto, id) => {
            
                return(
                  <MiniaturaProducto key={id} producto={producto}/>
                )
          })

          }
        </div>
    </div>
  )
}

export default Ofertas