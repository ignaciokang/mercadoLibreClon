import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {FiCornerDownRight} from "react-icons/fi";

const Comentarios = () => {
  const tags = [
    {
      titulo: "Costo y tiempo de envío",
    },
    {
      titulo: "Devoluciones gratis",
    },
    {
      titulo: "Medios de pago y promociones",
    },
    {
      titulo: "Garantía",
    },
    {
      titulo: "Cuotas sin tarjeta",
    },
  ];

  const pregs = [
    {
      pregunta: "Tiene luz LED?",
      respuesta: "Si, tiene luz LED en los bordes exteriores.",
    },
    {
        pregunta: "Tiene microfono desmontable?",
        respuesta: "No tiene microfono",
      },
      {
        pregunta: "Me recomendaría este producto para un niño de 8 años?",
        respuesta: "El producto es muy resistente a golpes gracias a su protector de silicona. Es de fácil uso y configuración para niños. La batería tiene una autonomía de 10hs. El producto es altamente recomendable! ",
      },

  ];

  return (
    <div className="p-4">
      <h2 className="my-6 text-2xl">Preguntas y respuestas</h2>
      <div>
        <p className="text-lg font-semibold">¿Qué querés saber?</p>
        <div className="flex space-x-6 my-6">
          {tags.map((etiqueta, index) => {
            return (
              <div className="bg-blue-100 text-CelesteML font-semibold p-2 rounded-lg w-full text-center ">
                <h2>{etiqueta.titulo}</h2>
              </div>
            );
          })}
        </div>
        <p className="text-lg font-semibold">Buscá lo que querés saber</p>
        <div className="h-12 bg-white rounded-lg  grid grid-cols-10 w-full overflow-hidden border border-gray-300 my-6 ">
          <input
            id="consultas"
            type="text"
            placeholder="Escribí una pregunta o palabra clave..."
            className=" shadow-gray-400 py-2 px-4 placeholder-gray-300 col-span-9 h-full"
            //   value={nombre}
            //   onChange={(e) => setNombre(e.target.value)}
          />
          <AiOutlineSearch className="h-full text-gray-300 text-center w-full p-2 col-span-1 bg-CelesteML " />
        </div>
        <p className="text-lg font-semibold">Últimas realizadas</p>
          <div>
              {pregs.map((preguntas, index) => {
                  return (
                  <div className="text-lg my-6 " key={index}>
                      <p>{preguntas.pregunta}</p>
                      <div className="flex text-gray-400  mt-2">
                        <FiCornerDownRight/>
                        <div className="px-2">
                        <p>{preguntas.respuesta}</p>
                        <p className="text-md">Respondido por Ignacio Kang</p>
                        </div>
                      </div>
                  </div>  
                  )
              })}
          </div>
      </div>
    </div>
  );
};

export default Comentarios;
