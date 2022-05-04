import images from "../../constants/images";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiChevronDown, BiBell } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-Amarillo h-[110px] py-4  text-gray-700 border-b-[1px] border-gray-300 ">
      <div className="w-4/5 mx-auto grid grid-rows-2">
        <div className="flex h-[36px] justify-between">
          <Link to="/">
            <img src={images.logo} alt="Logo MercadoLibre" className="h-full w-[140px]" />
          </Link>
          <div className="h-full bg-white rounded-sm shadow-md mx-12 grid grid-cols-10 w-1/2 ">
            <input
              id="buscador"
              type="text"
              placeholder="Buscar productos, marcas y más..."
              className=" shadow-gray-400 py-2 px-4 placeholder-gray-300 col-span-9 h-full"
              //   value={nombre}
              //   onChange={(e) => setNombre(e.target.value)}
            />
            <AiOutlineSearch className="h-full text-gray-500 text-center w-full p-2 col-span-1 bg-white text-md" />
          </div>
          <div>
            <Link to="/producto">
              <img src={images.disney} alt="DisneyPlus" className="h-[120%] w-[380px]" />
            </Link>
          </div>
        </div>
        <div className="flex items-middle h-[36px] mt-2 justify-between">
          <div className="flex w-[140px] items-center">
            <GoLocation className="text-3xl font-thin" />
            <div className="ml-1 -space-y-1">
              <p className="text-[12px] font-thin">Enviar a Ignacio</p>
              <p className="text-[14px]">Metán 4070</p>
            </div>
          </div>
          {/* <ul className="flex mx-12 px-4 space-x-6 font-thin text-[16px] w-1/2">
            <li className="flex items-center">
              Categorías <BiChevronDown />
            </li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Supermercado</li>
            <li>Moda</li>
            <li>Vender</li>
            <li>Ayuda</li>
          </ul> */}
          <div className="w-1/2 mx-12">
          <Navbar/>

          </div>

          <ul className="flex space-x-3 items-center w-[380px] text-md justify-around">
            <li className="flex items-center">
              {" "}
              <img
                src={images.perfil}
                alt="Foto perfil"
                className="h-6 rounded-full mr-2"
              />{" "}
              Ignacio <BiChevronDown />
            </li>
            <li clas>Mis compras</li>
            <li className="flex items-center">
              Favoritos <BiChevronDown />
            </li>
            <li className="text-xl">
              <BiBell />
            </li>
            <li className="text-xl">
              <Link to='/carrito'>
              <BsCart2 />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
