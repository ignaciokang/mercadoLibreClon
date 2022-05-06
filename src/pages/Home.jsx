import SliderImagen from "../components/Home/Slider/SliderImagen";
import { SliderData } from "../components/Home/Slider/SliderData";
import TarjetasBancarias from "../components/Home/TarjetasBancarias";
import UltimaVisita from "../components/Home/Publicaciones/UltimaVisita";
import Ofertas from "../components/Home/Publicaciones/Ofertas";
import Descubri from "../components/Home/Descubri";
import Pagar from "../components/Home/Pagar";

const Home = () => {
  return (
      <div className="bg-FondoGris">
        <SliderImagen slides={SliderData}/>
        <TarjetasBancarias/>
        <div className="w-4/5 mx-auto">
        <UltimaVisita/>
        <Ofertas/>
        <Descubri/>
        </div>
        <Pagar/>
      </div>
  );
};

export default Home;
