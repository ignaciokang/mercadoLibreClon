import images from '../../constants/images'
import {AiFillPlusCircle} from 'react-icons/ai'

const TarjetasBancarias = () => {
  return (
    <div className="bg-white w-4/5 h-[100px] mx-auto my-12 flex items-center justify-around rounded-md shadow-sm shadow-gray-300">
        <div className='flex p-4 items-center'>
            <img src={images.tarjetas1} alt="Tarjeta Credito" className='h-14' />
            <div className='ml-4'>
                <h3 className='text-[18px]'>Tarjeta de crédito</h3>
                <p className='text-CelesteML text-[15px]'>Ver promociones bancarias</p>
            </div>
        </div>
        <div className='flex p-4 items-center'>
            <img src={images.tarjetas2} alt="Tarjeta Debito" className='h-14' />
            <div className='ml-4'>
                <h3 className='text-[18px]'>Tarjeta de débito</h3>
                <p className='text-CelesteML text-[15px]'>Ver más</p>
            </div>
        </div>
        <div className='flex p-4 items-center'>
            <img src={images.tarjetas3} alt="Sin tarjeta" className='h-14' />
            <div className='ml-4'>
                <h3 className='text-[18px]'>Cuotas sin tarjeta</h3>
                <p className='text-CelesteML text-[15px]'>Conocé Mercado Crédito</p>
            </div>
        </div>
        <div className='flex p-4 items-center'>
            <img src={images.tarjetas4} alt="Efectivo" className='h-14' />
            <div className='ml-4'>
                <h3 className='text-[18px]'>Efectivo</h3>
                <p className='text-CelesteML text-[15px]'>Ver más</p>
            </div>
        </div>
        <AiFillPlusCircle className='text-3xl text-CelesteML'/>
    </div>
  )
}

export default TarjetasBancarias