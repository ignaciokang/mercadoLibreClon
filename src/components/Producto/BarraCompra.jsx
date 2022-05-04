import CompraAhora from "./CompraAhora";
import InfoVendedor from "./InfoVendedor";
import MediosPago from "./MediosPago";

const BarraCompra = ({prod, agregarCarrito}) => {
  return (
   <div className="space-y-4">
      <CompraAhora agregarCarrito={agregarCarrito} prod={prod}/>
      <InfoVendedor/>
      <MediosPago/>
   </div>
  );
};

export default BarraCompra;
