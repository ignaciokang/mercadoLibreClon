import Categorias from "../components/Producto/Categorias"
import Cuadro from "../components/Producto/Cuadro"
import UltimaVisita from '../components/Home/Publicaciones/UltimaVisita'
import { useParams } from "react-router-dom"
import ListadoProductos from "../constants/ListadoProductos"
import { useState, useEffect} from 'react'

const Producto = ({agregarCarrito}) => {

  //Tomo el ID
  const params = useParams();
  console.log(params);

  //
  const [prod, setProd] = useState({});

  useEffect(() => {
      // for (let i = 0; i < ListadoProductos.length; i++) {
      //   if (params.id === 3) {
      //     setProductoSeleccionado(ListadoProductos[i])
      //     console.log(productoSeleccionado)
      //   }
        
      // }
      for (let i = 0; i < ListadoProductos.length; i++) {
     
        if (params.id == ListadoProductos[i].id) {
          console.log(params.id)
          console.log(ListadoProductos[i])
          setProd(ListadoProductos[i])
        }
      }

      console.log(prod)
        
  }, []);

 

  return (
    <div className="w-4/5 mx-auto">
    <Categorias/>
    <Cuadro prod={prod} agregarCarrito={agregarCarrito}/>
    <UltimaVisita/>
    </div>

  )
}

export default Producto