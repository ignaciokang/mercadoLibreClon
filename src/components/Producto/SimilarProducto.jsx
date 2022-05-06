import MiniaturaProducto from "../Home/MiniaturaProducto"
import ListadoProductos from "../../constants/ListadoProductos"

const SimilarProducto = () => {
  
    return (
      <div className="my-12">
          <h2 className="my-6 text-2xl text-gray-500">Ofertas<button className="text-CelesteML text-[18px] ml-4">Ver más</button></h2>
          <div className="grid grid-cols-3 space-x-4">
  
          {ListadoProductos.map((producto, index) => {
            
            return(
              <div
              >
              {index <= 2 && (
                <>
                <MiniaturaProducto key={index} producto={producto}/>
                </>
              )}
            </div>
            )
      })

      }
          </div>
      </div>
    )
  
}

export default SimilarProducto