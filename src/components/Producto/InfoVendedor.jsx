import { AiFillCheckCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { RiMedalLine } from "react-icons/ri";
import { BsArrowReturnLeft, BsShieldCheck, BsTrophy } from "react-icons/bs";

const InfoVendedor = () => {
  return (
    <div className="p-6 border-[1px] border-gray-200 rounded-lg space-y-4">
      <p className="text-lg">Información sobre el vendedor</p>
      <div className="flex text-lg items-center">
        <GoLocation className="text-2xl mr-3" />
        <div>
          <p>Ubicación</p>
          <p className="text-gray-600 text-[16px]">Boedo, Capital Federal.</p>
        </div>
      </div>
      <div className="flex text-lg items-center text-green-600">
      <RiMedalLine className="text-2xl mr-3" />
        <div>
          <p className="font-semibold">MercadoLíder Platinum</p>
          <p className="text-gray-600 text-[16px]">¡Es uno de los mejores del sitio!</p>
        </div>
      </div>
      <div className="grid grid-cols-5 h-4">
        <div className="w-full bg-red-600 opacity-30"></div>
        <div className="w-full bg-orange-400 opacity-30"></div>
        <div className="w-full bg-yellow-300 opacity-30"></div>
        <div className="w-full bg-lime-500 opacity-30"></div>
        <div className="w-full bg-green-600"></div>
      </div>
      <div className="grid grid-cols-3 py-2 text-center ">
        <div>
            <p className="h-12 text-2xl">877</p>
            <p className="text-[11px] py-1">Ventas en los últimos 60 días</p>
        </div>
        <div>
            <AiFillCheckCircle className="mx-auto h-12 text-2xl text-green-600"/>
            <p className="text-[11px] py-1">Brinda buena atención</p>
        </div>
        <div>
            <AiFillCheckCircle className="mx-auto h-12 text-2xl text-green-600"/>
            <p className="text-[11px] py-1">Despacha sus productos a tiempo</p>
        </div>
      </div>
    </div>
  );
};

export default InfoVendedor;
