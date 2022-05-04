import images from "../../constants/images";

const ProductosCarrito = ({producto, actualizarCantidad, eliminarProducto}) => {

  const total = (producto.precio)*(producto.cantidad)

  return (
    <div className="flex justify-between">
      <div className="flex space-x-6 w-3/5">
          <img
            src={producto.imagen}
            alt="Imagen producto"
            className="w-16 h-16 object-contain border-2 p-2 bg-white"
          />
        <div className="space-y-4 truncate">
          <p className="text-2xl font-semibold truncate">{producto.titulo}</p>
          <p className="font-thin text-lg">Color: Negro <span className="text-CelesteML">Modificar</span></p>
          <p className="text-green-600">Envío gratis</p>
          <ul className="flex text-CelesteML justify-between">
              <li><button type="button" onClick={()=>eliminarProducto(producto.id)}>
              Eliminar
                </button></li>
              <li>Más productos del vendedor</li>
              <li>Comprar ahora</li>
              <li>Guardar para después</li>
          </ul>
        </div>
        </div>
        <div className="flex items-center mb-8">
      <p>
        Cantidad: 
        <select className="font-semibold border ml-4" value={producto.cantidad} onChange={(e) => actualizarCantidad({cantidad: e.target.value, id: producto.id})}>
          <option value="1">1 unidad</option>
          <option value="2">2 unidades</option>
          <option value="3">3 unidades</option>
          <option value="4">4 unidades</option>
        </select>
      </p>{" "}
    </div>
        <div>
            <p className="text-3xl">${total}</p>
        </div>
    </div>
  );
};

export default ProductosCarrito;
