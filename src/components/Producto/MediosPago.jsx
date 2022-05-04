import {AiOutlineCreditCard} from 'react-icons/ai'
import images from '../../constants/images'


const MediosPago = () => {
  return (
    <div className="p-6 border-[1px] border-gray-200 rounded-lg space-y-4 text-gray-700 text-lg">
    <p className="text-xl">Medios de pago</p>
    <div className='bg-green-600 rounded-md py-2 px-6 flex text-white text-[14px]'>
        <AiOutlineCreditCard className='text-2xl mr-3'/><p>¡Pagá en <span className='font-semibold'>hasta 12 cuotas sin interés!</span></p>
    </div>
    <p>Hasta 12 cuotas sin tarjeta</p>
    <img src={images.mediospago1} alt="Mercado Crédito" />
    <p>Tarjetas de crédito</p>
    <div className='flex space-x-4'>
    <img src={images.mediospago2} alt="Visa" />
    <img src={images.mediospago3} alt="American Express" />
    <img src={images.mediospago4} alt="Naranja" />
    <img src={images.mediospago5} alt="Master Card" />
    </div>
    <p>Tarjetas de débito</p>
    <div className='flex space-x-4'>
    <img src={images.mediospago2} alt="Visa" />
    <img src={images.mediospago5} alt="Master Card" />
    </div>
    <p>Efectivo</p>
    <div className='flex space-x-4'>
    <img src={images.mediospago6} alt="Pago Fácil" />
    <img src={images.mediospago7} alt="RapiPago" />
    </div>
    <button className='text-CelesteML'>Conocé otros medios de pago</button>
  </div>
  )
}

export default MediosPago