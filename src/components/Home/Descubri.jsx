import images from "../../constants/images";

const Descubri = () => {
  return (
    <div className="my-12  text-stone-600">
    <h2 className="my-6 text-2xl text-gray-500">Descubrí</h2>
      <div className="grid grid-cols-2 space-x-4">
        <div className="bg-white rounded-sm grid grid-cols-2 hover:shadow-xl shadow-gray-500">
          <div className="flex flex-col p-8 justify-evenly align-">
            <p>ACC. PARA VEHÍCULOS</p>
            <p className="font-semibold text-[28px] tracking-tight">
              HASTA 40% OFF <br></br> Y 12X SIN INTERÉS
            </p>
            <button className="bg-CelesteML w-28 h-10 text-white font-semibold rounded-sm hover:bg-blue-600 transition-colors duration-200 ease-in">
              ver más
            </button>
          </div>
          <img src={images.descubri1} alt="Vehiculos" />
        </div>
        <div className="bg-white rounded-sm grid grid-cols-2 hover:shadow-xl shadow-gray-50">
          <div className="flex flex-col p-8 justify-evenly align-">
            <p>CUMPLE SUPER</p>
            <p className="font-semibold text-[28px] tracking-tight">
              APROVECHÁ<br></br> HASTA 50% OFF
            </p>
            <button className="bg-CelesteML w-28 h-10 text-white font-semibold rounded-sm hover:bg-blue-600 transition-colors duration-200 ease-in">
              ver más
            </button>
          </div>
          <img src={images.descubri2} alt="Supermercados" />
        </div>
      </div>
    </div>
  );
};

export default Descubri;
