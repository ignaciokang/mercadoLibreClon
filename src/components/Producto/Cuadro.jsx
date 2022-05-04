import LateralIzq from "./LateralIzq";
import BarraCompra from "./BarraCompra";
import Comentarios from "./Comentarios";

const Cuadro = ({prod, agregarCarrito}) => {
  return (
    <div className="bg-white p-4">
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          <LateralIzq prod={prod} />
        </div>
        <div className="col-span-2">
          <BarraCompra prod = {prod} agregarCarrito={agregarCarrito} />
        </div>
      </div>
      <hr className=" mt-4 h-0" />
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          <Comentarios />
        </div>
      </div>
    </div>
  );
};

export default Cuadro;
