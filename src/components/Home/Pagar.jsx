import images from "../../constants/images"

const Pagar = () => {
  return (
    <div className="bg-white my-2 ">
        <div className="w-4/5 grid grid-cols-3 mx-auto">
            <div className="flex flex-col text-center p-6 justify-evenly space-y-2">
                <img src={images.pagar1} alt='Tarjeta' className="h-14 mb-4"/>
                <p className="text-[20px] text-stone-700">Elegí cómo pagar</p>
                <p className="text-[16px] px-10 text-gray-500">Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
                <a className="text-CelesteML">Cómo pagar tus compras</a>
            </div>
            <div className="flex flex-col text-center p-6 justify-evenly space-y-2">
                <img src={images.pagar2} alt='Tarjeta' className="h-14 mb-4"/>
                <p className="text-[20px] text-stone-700">Envío gratis desde $4000</p>
                <p className="text-[16px] px-10 text-gray-500">Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos</p>
                <a className="text-CelesteML">Cómo pagar tus compras</a>
            </div>
            <div className="flex flex-col text-center p-6 justify-evenly space-y-2">
                <img src={images.pagar3} alt='Tarjeta' className="h-14 mb-4"/>
                <p className="text-[20px] text-stone-700">Seguridad, de principio a fin</p>
                <p className="text-[16px] px-10 text-gray-500">¿No te gusta? ¡Devolelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
                <a className="text-CelesteML">Cómo pagar tus compras</a>
            </div>
        </div>
    </div>
  )
}

export default Pagar